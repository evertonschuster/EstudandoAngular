import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, timer } from 'rxjs';
import { decrement, increment } from './../ngrx';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(private store: Store<{ counter: number }>) {

  }

  public counter$: Observable<any>;

  ngOnInit(): void {
    this.counter$ = this.store.pipe(
      select('counterReducer')
    );
  }

  decrement() {
    timer(2000)
      .subscribe(() => {
        this.store.dispatch(decrement());
      });
  }

  increment() {
    this.store.dispatch(increment({ payload: 3 }));
  }
}
