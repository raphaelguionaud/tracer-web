import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';

import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models/ticket.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sprintboard',
  templateUrl: './sprintboard.component.html',
  styleUrls: ['./sprintboard.component.scss'],
  providers: []
})
export class SprintboardComponent implements OnInit {
  todo: Ticket[] = [];
  inDevelopment: Ticket[] = [];
  codeReview: Ticket[] = [];
  inTest: Ticket[] = [];
  done: Ticket[] = [];

  constructor(
    private TicketService: TicketService,
    private subs: SubSink,
  ) { }

  ngOnInit(): void {

    this.subs.sink = this.TicketService.getTickets().subscribe((res: Ticket[]) => {
      console.log('res -', res);
      this.todo = [];
      this.inDevelopment = [];
      this.codeReview = [];
      this.inTest = [];
      this.done = [];

      res.map(ticket => {

        if (
          ticket.progress === 'To do'
        ) { 
          this.todo.push(ticket); 
          return;
        }

        if (
          ticket.progress === 'In development'
        ) { 
          this.inDevelopment.push(ticket); 
          return;
        }

        if (
          ticket.progress === 'Code review'
        ) { 
          this.codeReview.push(ticket); 
          return;
        }

        if (
          ticket.progress === 'In test'
        ) { 
          this.inTest.push(ticket); 
          return;
        }

        if (
          ticket.progress === 'Done'
        ) { 
          this.done.push(ticket); 
          return;
        }
      });
    });
  }

  getActiveTickets() {
    this.TicketService.getTickets();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<number>) {
    return item.data % 2 === 0;
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }

}
