import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/iuser';
import { UserAuthService } from './../../../services/user-auth.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {
   admin:Iuser={username:"",password:""}
  isShown:boolean=false;

  constructor(public userAuthService:UserAuthService) { }

  ngOnInit(): void {
  }

  Login(){
    this.userAuthService.login(this.admin) ;
    
  }


}
