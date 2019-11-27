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
    var events = [];
    for (var i = 0; i < 50; i += 1) {
        var date = new Date();
        var eventType = Math.floor(Math.random() * 2);
        var startDay = Math.floor(Math.random() * 90) - 45;
        var endDay = Math.floor(Math.random() * 2) + startDay;
        var startTime;
        var endTime;
        if (eventType === 0) {
            startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
            if (endDay === startDay) {
                endDay += 1;
            }
            endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
            events.push({
                title: 'Test first type event' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: true
            });
        } else {
            var startMinute = Math.floor(Math.random() * 24 * 60);
            var endMinute = Math.floor(Math.random() * 180) + startMinute;
            startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
            endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
            events.push({
                title: 'Test second type event' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: false
            });
        }
    }
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