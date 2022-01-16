import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-user-account-header',
  templateUrl: './user-account-header.component.html',
  styleUrls: ['./user-account-header.component.scss']
})
export class UserAccountHeaderComponent implements OnInit {
  @Output() toogleSideBarEvent : EventEmitter<any> = new EventEmitter();
  constructor(private userAuthService:UserAuthService) { }

  ngOnInit(): void {
  }
  toogleSideBar(){
    this.toogleSideBarEvent.emit();
  }
  logOut(){
    this.userAuthService.logout();
  }
}
