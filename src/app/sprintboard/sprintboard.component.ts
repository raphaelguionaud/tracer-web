import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-sprintboard',
  templateUrl: './sprintboard.component.html',
  styleUrls: ['./sprintboard.component.scss'],
  providers: [TicketService]
})
export class SprintboardComponent implements OnInit {

  constructor(
    private ticketService: TicketService,
  ) { }

  ngOnInit(): void {
    this.getActiveTickets();
  }

  getActiveTickets() {
    this.ticketService.getTickets().subscribe(res => {
      console.log(res);
    })
  }

}
