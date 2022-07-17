import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { SubSink } from 'subsink';
import { Ticket } from '../models/ticket.model'

@Component({
  selector: 'app-sprintboard',
  templateUrl: './sprintboard.component.html',
  styleUrls: ['./sprintboard.component.scss'],
  providers: []
})
export class SprintboardComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(
    private TicketService: TicketService,
    private subs: SubSink,
  ) { }

  ngOnInit(): void {
    this.TicketService.getTickets().subscribe((res: Ticket[]) => {
      this.tickets = res;
    });
  }

  getActiveTickets() {

  }

  // createTicket() {
  //   this.TicketService.createTicket().subscribe(res => {
  //     this.getActiveTickets();
  //   })
  // }

  // ngOnDestroy() {
  //   this.subs.unsubscribe();
  // }

}
