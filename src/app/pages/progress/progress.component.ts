import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ],
})
export class ProgressComponent implements OnInit {

  progress1 = 30;
  progress2 = 40;

  constructor() { }

  ngOnInit(): void {
  }

}
