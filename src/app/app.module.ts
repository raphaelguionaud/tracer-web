import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SprintboardComponent } from './sprintboard/sprintboard.component';
import { TicketService } from './services/ticket.service';
import { SubSink } from 'subsink';

@NgModule({
  declarations: [
    AppComponent,
    SprintboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    SubSink,
    TicketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
