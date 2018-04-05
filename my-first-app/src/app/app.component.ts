import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-root',
  templateUrl: './app.component.html',
/*  styleUrls: ['./app.component.css']*/
  styles:[`
  	h2 {
  		color:green;
  	}
  `]
})
export class AppComponent {
/*1. First change*/
  title = 'My First Custom Angular Page';
}
