import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalenderPage } from './calender.page';


import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
const routes: Routes = [
  {
    path: '',
    component: CalenderPage
  }
];

@NgModule({
  imports: [    
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    HttpClientJsonpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalenderPage]
})
export class CalenderPageModule {}
