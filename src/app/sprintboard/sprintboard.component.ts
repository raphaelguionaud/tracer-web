import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketService } from '../services/ticket.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-sprintboard',
  templateUrl: './sprintboard.component.html',
  styleUrls: ['./sprintboard.component.scss'],
  providers: []
})
export class SprintboardComponent implements OnInit {

  tickets$: Observable<any> | undefined;

  constructor(
    private ticketService: TicketService,
    private subs: SubSink,
  ) { }

  ngOnInit(): void {
    this.getActiveTickets();
  }

  getActiveTickets() {
    this.tickets$ = this.ticketService.getTickets();
  }

  createTicket() {
    this.ticketService.createTicket().subscribe(res => {
      this.getActiveTickets();
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
