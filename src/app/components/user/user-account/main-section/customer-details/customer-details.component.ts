import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersFromApiService } from 'src/app/services/users-from-api.service';
import { UserAPI } from 'src/app/models/user-api';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})

export class CustomerDetailsComponent implements OnInit {
  ImagesUrl: string = environment.ImagesURL;
  sentUserID: string | null = "";
  user: UserAPI | undefined;
  private subscriptions: Subscription[] = [];
  constructor(private activatedRoute: ActivatedRoute
    , private userSerAPI: UsersFromApiService
    , private location: Location) {

  }

  ngOnInit(): void {
    // Assign returned subscription to vaariable, so we can unsubscribe
    let subscription1: Subscription = this.activatedRoute.paramMap.subscribe(
      (paramMap) => {
        this.sentUserID = paramMap.get("id")
        //this.prd = this.prdService.getProductByID(this.sentPrdID);
        if (this.sentUserID !== null) {
          let subscription2: Subscription = this.userSerAPI.getIUserByID(this.sentUserID).subscribe((user) => {
            this.user = user;
            //console.log(this.user)
            this.subscriptions.push(subscription2);
          })
        }

      },
      (err) => {
        console.log(err)
      }
    );
    this.subscriptions.push(subscription1);
  }

  ngOnDestroy(): void {
    for (let sub of this.subscriptions)
      sub.unsubscribe();
  }

  goBack() {
    this.location.back();
  }

}