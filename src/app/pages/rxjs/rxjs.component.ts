import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ],
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcription: Subscription;

  constructor() {
    this.subcription = this.returnObserver()
    .subscribe(
      num => console.log('Este es el número: ', num),
      error => console.error('Upps, tenemos un error', error),
      () => console.log('Finalizó el observable')
    );
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  returnObserver(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let counter = 0;

      const interval = setInterval(() => {
        counter ++;

        const entity = {
          value: counter,
        };

        observer.next(entity);

        // if (counter === 3) {
        //   clearInterval(interval);
        //   observer.complete();
        // }

        // if (counter === 2) {
        //   // clearInterval(interval);
        //   observer.error('Help me');
        // }

      }, 1000);
    })
    .pipe(
      map(response => {
        return response.value;
      }),
      filter((value, index) => {
        if ((value % 2) === 1) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
