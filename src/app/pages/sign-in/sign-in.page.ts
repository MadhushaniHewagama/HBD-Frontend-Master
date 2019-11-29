import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  public btnClickedHome(): void{
    this.router.navigate(['calender']);
  }

}
