import { BrowserModule } from '@angular/platform-browser';
// This decorator is also added
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
//Register, don't add .ts extension
import { ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';


@NgModule({
  declarations: [
    AppComponent,
    //Registering Component
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  //Which components should be taken into consideration
  bootstrap: [AppComponent]
})
export class AppModule { }
