import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsFromAPIService } from 'src/app/services/products-from-api.service';
import { ProductAPI } from 'src/app/models/product-api';
import { Location } from '@angular/common'
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  
  ImagesUrl: string = environment.ImagesURL;
  sentPrdID: string|null = "";
  prd: ProductAPI | undefined;
  private subscriptions: Subscription[] = [];

  constructor(private activatedRoute: ActivatedRoute
    , private prdSerAPI: ProductsFromAPIService
    , private location: Location) {

  }

  ngOnInit(): void {
   // Assign returned subscription to vaariable, so we can unsubscribe
   let subscription1: Subscription = this.activatedRoute.paramMap.subscribe(
    (paramMap) => {
      this.sentPrdID = paramMap.get("id")
      //this.prd = this.prdService.getProductByID(this.sentPrdID);
      if (this.sentPrdID !== null) {
      let subscription2: Subscription = this.prdSerAPI.getProductByID(this.sentPrdID).subscribe((prd)=>{
        this.prd = prd;
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
