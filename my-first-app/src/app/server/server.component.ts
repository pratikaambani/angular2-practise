import { Component } from '@angular/core';


@Component({
	//html tag, should be string, should be unique
	selector : 'app-custom-server',
	templateUrl : './server.component.html'
})
/*naming: NameOfComponent|Component*/
export class ServerComponent {
/*	: number and : String are optional here*/
	serverId: number = 10;
	serverStatus: String = 'offline';
	getServerTimezone() {
		return this.serverId + ' IST';
	}
}
