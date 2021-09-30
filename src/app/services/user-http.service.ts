import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private http:HttpClient) { }

  GetAllUsers(){
       return this.http.get("http://localhost:62127/api/UserManagement/GetUsers")
  }

  Login(userEmail:string,password:string){
    const params=new HttpParams({
      fromObject:{
        userEmail:userEmail,
        password:password
      }
    })
    return this.http.get("http://localhost:62127/api/UserManagement/Login",
    {params:params})
  }
}
