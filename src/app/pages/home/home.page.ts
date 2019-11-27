import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  viewTitle: any;
  [x: string]: any;
   monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']; 
   public eventSource : any;
  public selectedDate = new Date();
  public showDate=this.monthNames[this.selectedDate.getMonth()] +" "+ this.selectedDate.getFullYear().toString();
  
  isToday: boolean = true;
  date = new Date();
  calendar = {
    mode: 'month',
    currentDate: this.selectedDate,
    dateFormatter: {
      formatMonthViewDay: function(date:Date) {
          return date.getDate().toString();
      }            
  }
  }

  constructor(public navCtrl: NavController,public router:Router) {
    console.log("start date:::::::::::::"+new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate())))
    console.log("end::::::")
    this.eventSource=[{
      title: 'Ishanks Birth Day',
      startTime: new Date(),
      endTime: new Date(),
      
  },{
    title: 'Madhus Birth Day',
    startTime: new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth()+1, this.date.getUTCDate() + 4)),
    endTime: new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth()+1, this.date.getUTCDate() + 4)),
    allDay: true
  },{
  title: 'Sandunis Birth Day',
  startTime: new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate() +1)),
  endTime: new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate() +2)),
  allDay: false
  },{
    title: 'Lahirus Birth Day',
    startTime: new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate() - 2)),
    endTime: new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate() -1)),
    allDay: false
    },{
      title: 'Some one else Birth Day',
      startTime: new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate() +1)),
      endTime: new Date(Date.UTC(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate() +2)),
      allDay: false
      }];
  }
  changeMode(mode) {
    this.calendar.mode = mode;
  }
  loadEvents() {
    }

createEvent(){}

  onCurrentDateChanged(ev) {
    console.log(ev);
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    ev.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === ev.getTime();
  }
  onViewTitleChanged(Title) {
    this.viewTitle = Title;
  }
  onTimeSelected(event) {
    console.log(event);
    var date = new Date();
    this.selectedDate=event.selectedTime;
    this.showDate=this.monthNames[this.selectedDate.getMonth()]+" "+ this.selectedDate.getFullYear().toString();
  
    //console.log("hga"+event.selectedTime);
    var task = "work fast";

  }
  onEventSelected(event) {
    console.log(event);
  }
  addEvent(): void{
    this.router.navigate(['add-event']);
  }
}