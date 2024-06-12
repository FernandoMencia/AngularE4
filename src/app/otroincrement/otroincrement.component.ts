import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from '../counter.action';

@Component({
  selector: 'app-otroincrement',
  templateUrl: './otroincrement.component.html',
  styleUrls: ['./otroincrement.component.scss']
})
export class OtroincrementComponent {
  constructor(private store: Store<{count: number}>) {

  }
  increment() {
    this.store.dispatch(increment())
  }
}
