import { Component } from '@angular/core';


@Component({
	//html tag, should be string, should be unique
	selector : 'app-custom-server',
	templateUrl : './server.component.html',
	styles: [`
		.online {
			color: blue;
		}
	`]
})
/*naming: NameOfComponent|Component*/
export class ServerComponent {

	constructor() {
		this.serverStatus = Math.random() > 0.5 ? 'Online' : 'offline';
	}

/*	: number and : String are optional here*/
	serverId: number = 10;
	serverStatus: String = 'offline';
	getServerTimezone() {
		return this.serverId + ' IST';
	}

	getColor() {
		return this.serverStatus === 'Online' ? 'green' : 'magenta';
	}
}
