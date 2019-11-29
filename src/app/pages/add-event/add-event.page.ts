import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HdbService } from 'src/app/services/hdb.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {
  public addBirthDay : FormGroup;
  constructor(private hbdService:HdbService,public router:Router) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm():void{

    this.addBirthDay = new FormGroup({
      date: new FormControl("",[
        Validators.required,       
      ]),

      name: new FormControl("", [Validators.required]),
      phone: new FormControl("", ),
      msg : new FormControl("", )
    })

  }
  //.toISOString()
  add(): void{
    console.log("test::::"+moment(this.addBirthDay.value.date).format('YYYY/MM/DD'))
    console.log("test2:::"+JSON.stringify(this.addBirthDay.value))
        if(this.addBirthDay.valid){
      this.hbdService.addBDay({"date":moment(this.addBirthDay.value.date).format('YYYY/MM/DD'),"name":this.addBirthDay.value.name,"phone":this.addBirthDay.value.phone,"msg":this.addBirthDay.value.msg}).subscribe(
        res => { 
          this.router.navigate(['home']);
          console.log(res); },
        err => { console.log(err); }

      )
    }
  }

}
