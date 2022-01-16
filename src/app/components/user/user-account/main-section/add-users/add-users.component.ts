import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import{FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'
import{UsersServiceService} from '../../../../../services/users-service.service'
import { Subscription } from 'rxjs';
import { UserAPI } from 'src/app/models/user-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  myForm2: FormGroup;
  newURL:String='';
    private subscriptionsAdmin:Subscription[]=[];
  constructor(private fb: FormBuilder,private fb2:FormBuilder, private AddUsersServ:UsersServiceService,private router:ActivatedRoute) {

    this.myForm2=this.fb.group({
      username:['',[Validators.required,Validators.minLength(10)]],
      email:['',[Validators.required,Validators.minLength(10),Validators.maxLength(40),Validators.email]],
      password:['',[Validators.required,Validators.maxLength(20),Validators.minLength(6)]],
      imageSrc:['']
    })
    
   }

  ngOnInit(): void {
    this.myForm2.valueChanges.subscribe() 
  }

  addUser(user:UserAPI){
     this.subscriptionsAdmin.push(
       this.AddUsersServ.insertUser(user)
       .subscribe(newUser=>
         {user=newUser;
           console.log(newUser)
           alert(`you have Added ${user.username}, Successfully.!`);

         },(err)=>{alert(`the name ${user.email}, is used`)}
         ))
   }
   upload(event:any){
    var file= event.target.files[0];
    this.newURL=file.name;
    console.log(file.name);
    console.log("newURl",this.newURL)
    this.myForm2.controls['imageSrc'].patchValue(this.newURL);
    console.log("image name",this.myForm2.controls['imageSrc'].value);
      this.AddUsersServ.uploadimage(file).subscribe((d)=>{
      console.log("New file",d);
    },error=>{console.error(error);
    });
   }


   updateUser(u:UserAPI){
     this.AddUsersServ.updateUser(u).subscribe(newupdated=>{
       u=newupdated;
     })
   }

}
