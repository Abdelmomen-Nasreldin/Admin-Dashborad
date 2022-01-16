import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  isOpen:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  toogleAside(){
    this.isOpen = !this.isOpen;
  }
}
