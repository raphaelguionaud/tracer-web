import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent implements OnInit {
  @Input() _id: string = '';
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() priority: string = '';
  @Input() progress: string = '';
  @Input() type: string = '';
  @Input() tags: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
