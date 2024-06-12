import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import { increment, decrement, reset } from '../counter.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number}>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
