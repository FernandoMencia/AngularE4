import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset } from '../counter.action';

@Component({
  selector: 'app-otroreset',
  templateUrl: './otroreset.component.html',
  styleUrls: ['./otroreset.component.scss']
})
export class OtroresetComponent {
  constructor(private store: Store<{count: number}>) {

  }
  reset() {
    this.store.dispatch(reset())
  }
}

