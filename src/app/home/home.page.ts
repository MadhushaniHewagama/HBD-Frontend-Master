import { Component } from '@angular/core';
import { HdbService } from '../services/hdb.service';
import { SMS } from '@ionic-native/sms/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public data: any;
  constructor(private hbdService: HdbService,private sms: SMS ) {
    //this.getTestData();
    //this.sms.send('0717725158', 'Test');
  }

  getTestData(): void{
    this.hbdService.getTest().subscribe(
      res =>{
        console.log("res"+JSON.stringify(res));
        this.data=res;
      },
      err =>{
        console.log("error"+err)
      }
    )
  }
  smsSend(): void{
    this.sms.send('0717725158', 'Test');
  }
}
