import{FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'
import { AddingProductsServiceService } from 'src/app/services/adding-products-service.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductAPI } from 'src/app/models/product-api';
import { Category } from 'src/app/models/category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.scss']
})
export class InsertProductComponent implements OnInit,OnChanges {
  newURL:String='ahmad';
  notAdded:boolean=false;
  nameths:String='';
  prd:ProductAPI={} as ProductAPI
  myForm: FormGroup;
  catList:Category[]=[];
  private subscriptionsAdmin:Subscription[]=[];
  constructor(private fb: FormBuilder,private ProductInserteAPI:AddingProductsServiceService) {

    this.myForm=this.fb.group({
      id:Date.now(),
      title:['',[Validators.required,Validators.minLength(10)]],
      desc:['',[Validators.required,Validators.minLength(20),Validators.maxLength(150)]],
      price:['',[Validators.required,Validators.min(1)]],
      quantity:['',[Validators.min(1),Validators.max(100)]],
      imageSrc:[''],
      categories:['']

    })
   }
  
  ngOnInit(): void {
    // this.catAPI.getallCategories()
    // .subscribe(categoriesList=>{
    //   this.catList=categoriesList;
    // })
    this.myForm.valueChanges.subscribe() 
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.myForm.controls['ImgUrl'].setValue(this.newURL);
  }


  addProduct(prd:ProductAPI){
   console.log("this is working",prd);
    this.subscriptionsAdmin.push(
      this.ProductInserteAPI.insertProduct(prd)
      .subscribe(newProd=>
        {prd=newProd;
          console.log(prd)
          console.log(newProd)
        }
        ))
     alert(`you have Added ${prd.title}, Successfully.!`);
  }

  upload(event:any){
    var file= event.target.files[0];
    this.newURL=file.name;
    console.log(file.name);
    console.log("newURl",this.newURL)
    this.myForm.controls['imageSrc'].patchValue(this.newURL);
    console.log("image name",this.myForm.controls['imageSrc'].value);
      this.ProductInserteAPI.uploadimage(file).subscribe((d)=>{
      console.log("New file",d);
    },error=>{console.error(error);
    });
   }

   uploadMulti(event:any){
    const files:FileList= event.target.files;
    console.log(files);
    this.ProductInserteAPI.uploadImages(files).subscribe((d)=>{  
      console.log(d);
    },error=>{console.error(error);});

   }
  }
