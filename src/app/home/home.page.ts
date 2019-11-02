import { Component } from '@angular/core';
import { HdbService } from '../services/hdb.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public data: any;
  constructor(private hbdService: HdbService ) {
    this.getTestData();
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
}
