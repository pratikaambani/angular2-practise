import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  
  //This element is part of this component only, we can't access it outside, because by default all props of components are only accessible inside this component
  // element: {type:string, name:string, content:string};

  //Solution: Use @Input decorator, now we'll be able to expose this property to outside world
  @Input('elementAlias') element1: {type:string, name:string, content:string};
  //@Input('elementAlias') : Giving Alias to component

  constructor() { }

  ngOnInit() {
  }

}
