import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Ticket } from '../models/ticket.model';
@Injectable()
export class TicketService {
    targetUri: string = "https://tracer-apijs.herokuapp.com/tickets";

    constructor(
        private http: HttpClient,
    ) {}

    getTickets() {
        return this.http.get<Ticket[]>(this.targetUri);
    }

}