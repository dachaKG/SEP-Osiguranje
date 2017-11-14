import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
        
    private apiUrl = 'http://localhost:8080/users';

    constructor(private http: Http) { }
    
    findAll(){
        return this.http.get(this.apiUrl)
                .map((res:Response) => res.json());  
    }
    
    saveUser(user){
        return this.http.post(this.apiUrl, user);
      
 
  }

}
