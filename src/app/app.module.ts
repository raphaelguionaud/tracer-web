import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { SubSink } from 'subsink';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SprintboardComponent } from './sprintboard/sprintboard.component';
import { TicketService } from './services/ticket.service';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SprintboardComponent,
    TicketCardComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [
    SubSink,
    TicketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
