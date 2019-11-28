import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HdbService } from 'src/app/services/hdb.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  
  public signUpForm : FormGroup;

  constructor(private hbdService:HdbService,public router:Router) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm():void{

    this.signUpForm = new FormGroup({
      user_name: new FormControl("",[
        Validators.required,
       
        
      ]),

      email: new FormControl("", [Validators.required, Validators.email]),

      password : new FormControl("",[Validators.required
      ])
    })

  }

  register():void{
    console.log(JSON.stringify(this.signUpForm.value));
    console.log(this.signUpForm.valid)
    if(this.signUpForm.valid){
     
      this.hbdService.addUser(this.signUpForm.value).subscribe(
        res => { 
          this.router.navigate(['sign-in']);
          console.log(res); },
        err => { console.log(err); }

      )
    }
  }

}
