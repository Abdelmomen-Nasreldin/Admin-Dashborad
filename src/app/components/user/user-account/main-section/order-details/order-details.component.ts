import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrdersFromApiService } from 'src/app/services/orders-from-api.service';
import { OrderAPI } from 'src/app/models/order-api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})

export class OrderDetailsComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
  }
}

