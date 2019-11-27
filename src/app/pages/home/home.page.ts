import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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
  
  calendar = {
    mode: 'month',
    currentDate: this.selectedDate,
    dateFormatter: {
      formatMonthViewDay: function(date:Date) {
          return date.getDate().toString();
      }            
  }
  }

  constructor(public navCtrl: NavController) {
    this.loadEvents();
  }
  changeMode(mode) {
    this.calendar.mode = mode;
  }
  loadEvents() {
    this.eventSource = this.createRandomEvents();
  }
  createRandomEvents() {
    var date = new Date();
    var events = [{
      title: 'Meeting 1',
      startTime: new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 1)),
      endTime: new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 2)),
      allDay: true
  },{
    title: 'Meeting 2',
    startTime: new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 3)),
    endTime: new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 4)),
    allDay: true
},{
  title: 'Meeting 3',
  startTime: new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() - 2)),
  endTime: new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() - 1)),
  allDay: true
}];
    
    return events;
}
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
}