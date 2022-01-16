import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-user-account-aside',
  templateUrl: './user-account-aside.component.html',
  styleUrls: ['./user-account-aside.component.scss']
})
export class UserAccountAsideComponent implements OnInit {

  constructor(private userAuthService:UserAuthService) { }

  ngOnInit(): void {
  }
  logOut(){
    this.userAuthService.logout();
  }

}
