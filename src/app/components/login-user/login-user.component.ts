import { Component, OnInit } from '@angular/core';
import { UserHttpService } from '../../services/user-http.service';
import {Router} from "@angular/router";
import {UserDetailsService} from '../../services/user-details.service'

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  users: any;
  signUpContent = false;
  signInContent = true;
  loginEmail!:string;
  loginPassword!:string;

  constructor(private httpUser: UserHttpService, private router: Router, private userDetailService:UserDetailsService) { }

  ngOnInit(): void {

  }

  signIn(){
   this.httpUser.Login(this.loginEmail,this.loginPassword).subscribe((x:any)=>{  
     if(x){
       this.userDetailService.currentUser=x;
       this.router.navigate(['add-service'])
     }
     else{
         alert('Invalid username or password you entered')
     }
   }
   )
  }

  checkSign(){
    this.signInContent=!this.signInContent;
    this.signUpContent=!this.signUpContent;
}

}
