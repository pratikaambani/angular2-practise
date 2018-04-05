import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
/*  templateUrl: './servers.component.html',*/
  template: '<app-custom-server></app-custom-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
