import { Component, OnInit } from '@angular/core';
import { MbscEventcalendarOptions } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {

  constructor(private http: HttpClient,public router:Router) {}

    events: any;
    date = new Date();
    eventSettings: MbscEventcalendarOptions = {
        theme: 'mobiscroll',
        themeVariant:'dark',
        display: 'inline',
        showEventCount: true,
        eventText: 'BDay',
        eventsText: 'BDays'
    };

    ngOnInit() {
      
    //   this.events=[{
    //     title: 'Ishanks Birth Day',
    //     startTime: new Date(),
    //     endTime: new Date(),
        
    // },{
    //   title: 'Madhus Birth Day',
    //   startTime: new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth()+1, this.date.getUTCDate() + 4)),
    //   endTime: new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth()+1, this.date.getUTCDate() + 4)),
    //   allDay: true
    // },{
    // title: 'Sandunis Birth Day',
    // startTime: new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate() +1)),
    // endTime: new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate() +2)),
    // allDay: false
    // },{
    //   title: 'Lahirus Birth Day',
    //   startTime: new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate() - 2)),
    //   endTime: new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate() -1)),
    //   allDay: false
    //   },{
    //     title: 'Some one else Birth Day',
    //     startTime: new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate() +1)),
    //     endTime: new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate() +2)),
    //     allDay: false
    //     }];
      
        this.events=[{color: "#FF0000",end: "2019-11-29T08:00:00.000Z",start: "2019-11-29T07:00:00.000Z",text: "Person 1 BDay"},{color: "#FF0000",end: "2019-11-29T08:00:00.000Z",start: "2019-11-29T07:00:00.000Z",text: "Person 5 BDay"},{color: "#008000",end: "2019-11-30T08:00:00.000Z",start: "2019-11-30T07:00:00.000Z",text: "Person 2 BDay"},{color: "#FF0000",end: "2019-11-26T08:00:00.000Z",start: "2019-11-26T07:00:00.000Z",text: "Person 3 BDay"},{color: "#008000",end: "2019-12-30T08:00:00.000Z",start: "2019-12-30T07:00:00.000Z",text: "Person 4 BDay"}]
    }
    addEvent(): void{
      this.router.navigate(['add-event']);
    }
}
