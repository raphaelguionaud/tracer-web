import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Ticket } from '../models/ticket.model';

@Injectable()
export class TicketService {
    targetUri: string = "http://localhost:3000/tickets";

    constructor(
        private http: HttpClient
    ) {}

    getTickets() {
        const tickets = this.http.get<Ticket[]>(this.targetUri);
        console.log(tickets);
        return tickets;
    }

    // createTicket() {
    //     return this.http.post('http://localhost:3000/tickets', null);
    // }
}