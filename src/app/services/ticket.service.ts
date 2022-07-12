import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class TicketService {
    constructor(
        private http: HttpClient
    ) {}

    getTickets() {
        return this.http.get('http://localhost:3000/tickets');
    }

    createTicket() {
        return this.http.post('http://localhost:3000/tickets', null);
    }
}