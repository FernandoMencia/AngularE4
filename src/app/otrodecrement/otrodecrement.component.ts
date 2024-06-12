import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement } from '../counter.action';

@Component({
  selector: 'app-otrodecrement',
  templateUrl: './otrodecrement.component.html',
  styleUrls: ['./otrodecrement.component.scss']
})
export class OtrodecrementComponent {
  constructor(private store: Store<{count: number}>) {

  }
  decrement() {
    this.store.dispatch(decrement())
  }
}

