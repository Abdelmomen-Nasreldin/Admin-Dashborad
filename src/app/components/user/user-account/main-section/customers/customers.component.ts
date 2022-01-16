import { Component, OnInit } from '@angular/core';
import { UsersFromApiService } from 'src/app/services/users-from-api.service';
import { UserAPI } from 'src/app/models/user-api';
import { UserStats } from 'src/app/models/user-stats';
import { environment } from 'src/environments/environment';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

  
export class CustomersComponent implements OnInit{
  
  ImagesUrl: string = environment.ImagesURL;
  todayDate: Date = new Date();
  UserList: UserAPI[] = [];
  SelectedUser!: UserAPI;
  UserStats!: UserStats;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private userSerAPI: UsersFromApiService) {
  }
  ngOnInit(): void {
    this.userSerAPI.getAllUsers()
    .subscribe(usersList => {
      this.UserList = usersList;
      //console.log(this.UserList)
    },
      err => {
        console.log(err);
      });
  }
  showUserStats(){
    this.userSerAPI.getUserStats()
    .subscribe(userstats => {
      this.UserStats = userstats;
      console.log(this.UserStats)
    },
      err => {
        console.log(err);
      });
  }
  deleteUser(usrId:any) {
    alert("Are you sure to delete this user")
    this.userSerAPI.deleteUserByID(usrId).subscribe(
      (usr=>{console.log(usr)
        this.userSerAPI.getAllUsers()
        .subscribe(usersList => {
          this.UserList = usersList;
          //console.log(this.UserList)
        },
          err => {
            console.log(err);
          });
      })
      ,(err=>console.log(err))
    )
    
   }
}