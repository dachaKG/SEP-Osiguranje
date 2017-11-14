import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  providers: [UserService]
})
export class UserCreateComponent implements OnInit {

    user:any;
    userForm: FormGroup;
    
    constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

    ngOnInit() {
        this.userForm = new FormGroup({
        ime: new FormControl('', Validators.required),
        prezime: new FormControl('', Validators.required),
        email: new FormControl('', [
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
      ]),
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });
    }

    onSubmit() {
        if (this.userForm.valid) {
            this.user = this.userForm.value;
            console.log(this.user);
            this.userService.saveUser(this.user).subscribe();
     
         }
        // this.userForm.reset();
         this.router.navigate(['/users']);
  }


}
