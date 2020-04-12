import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styles: [
  ],
})
export class PromesaComponent implements OnInit {

  constructor() {
    this.Count3().then(message =>
      console.log('Finalizó la promesa.', message)
    ).catch(error =>
      console.error('Falló la promesa.', error),
    );
  }

  ngOnInit(): void {
  }

  Count3(): Promise<boolean> {
    return new Promise((resolve, rejects) => {
      let counter = 0;

      const interval =  setInterval(() => {
        counter += 1;
        console.log(counter);

        if (counter === 3) {
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);
    });
  }

}
