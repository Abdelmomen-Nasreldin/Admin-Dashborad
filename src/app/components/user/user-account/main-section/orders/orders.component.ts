import { Component, OnInit } from '@angular/core';
import { OrdersFromApiService } from 'src/app/services/orders-from-api.service';
import { OrderAPI } from 'src/app/models/order-api';
import { UserAPI } from 'src/app/models/user-api';
import { UsersFromApiService } from 'src/app/services/users-from-api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})


export class OrdersComponent implements OnInit {

  todayDate: Date = new Date();
  OrderList: OrderAPI[] = [];
  selectedUser: string = "";
  Users!: UserAPI[];
  constructor(private OrderSerAPI: OrdersFromApiService, private userSerAPI: UsersFromApiService) {
  }
  ngOnInit(): void {
    this.OrderSerAPI.getAllOrders()
      .subscribe(ordersList => {
        this.OrderList = ordersList;
        //console.log(this.OrderList)
      },
        err => {
          console.log(err);
        });



    this.userSerAPI.getAllUsers()
      .subscribe(usersList => {
        this.Users = usersList;
        //console.log(this.UserList)
      },
        err => {
          console.log(err);
        });
  }
  showOrderOfUser(id: string) {
    if (id === "") {
      this.OrderSerAPI.getAllOrders()
        .subscribe(ordersList => {
          this.OrderList = ordersList;
          console.log(this.OrderList)
        },
          err => {
            console.log(err);
          });
    }
    else {
      this.OrderSerAPI.getOrdersByUserId(id)
        .subscribe(Orders => {
          this.OrderList = Orders;
          //console.log(this.SelectedOrders)
        },
          err => {
            console.log(err);
          });
    }
  }
}

