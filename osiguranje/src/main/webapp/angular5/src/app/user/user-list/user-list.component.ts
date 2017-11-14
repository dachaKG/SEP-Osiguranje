import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { Http, Response } from "@angular/http";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers : [UserService],
})
export class UserListComponent implements OnInit {
        
    users;
    private apiUrl = 'http://localhost:8080/users';

    constructor(private userService: UserService, private http: Http) { }

    ngOnInit() {
        this.getAllUsers();
    }
    
    getAllUsers() {
        this.userService.findAll()
                .subscribe( users =>  {this.users = users; },
                err => { console.log(err); });
        
            
    }

}
