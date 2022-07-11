import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class TicketService {
    myUrl: string = 'package.json';

    constructor(
        private http: HttpClient
    ) {}

    getTickets() {
        return this.http.get(this.myUrl);
    }
}