import { interval, Observer, Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private _numbersObservableSubscriber: Subscription;
  private _customObservableSubscriber: Subscription;

  constructor() { }

  public ngOnInit(): void {
    this._numbersObservableSubscriber = interval(1000)
      .subscribe((num: number) => {
        console.log(num);
      });
    // tslint:disable-next-line: no-unsafe-any
    const myObservable: Observable<string> = Observable.create((observer: Observer<string>) => {
      setTimeout(
        () => {
          observer.next('first package');
        },
        2000
      );
      setTimeout(
        () => {
          observer.next('second package');
        },
        4000
      );
      setTimeout(
        () => {
          observer.complete();
        },
        5000
      );
      setTimeout(
        () => {
          observer.error('third package');
        },
        6000
      );
    });

    this._customObservableSubscriber = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

  public ngOnDestroy(): void {
    this._numbersObservableSubscriber.unsubscribe();
    this._customObservableSubscriber.unsubscribe();
  }

}
