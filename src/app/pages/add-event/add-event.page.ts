import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HdbService } from 'src/app/services/hdb.service';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {
  public addBirthDay : FormGroup;
  constructor(private hbdService:HdbService) { }

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
  add(): void{
    if(this.addBirthDay.valid){
      this.hbdService.addBDay(this.addBirthDay.value).subscribe(
        res => { console.log(res); },
        err => { console.log(err); }

      )
    }
  }

}
