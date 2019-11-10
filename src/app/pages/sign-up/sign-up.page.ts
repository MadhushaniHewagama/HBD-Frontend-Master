import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HdbService } from 'src/app/services/hdb.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  
  public signUpForm : FormGroup;

  constructor(private hbdService:HdbService) { }

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
    if(true){
      console.log(JSON.stringify(this.signUpForm.value));
      this.hbdService.addUser(this.signUpForm.value).subscribe(
        res => { console.log(res); },
        err => { console.log(err); }

      )
    }
  }

}
