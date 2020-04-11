import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ],
})
export class IncrementComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() title = 'Title default';
  @Input() progress = 50;

  @Output() progressChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onProgressChange(newValue: number) {

    // const HTML_ELEMENT: any = document.getElementsByName('progress')[0];

    if (newValue >= 100){
      this.progress = 100;
    } else if (newValue <= 0){
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    // HTML_ELEMENT.value = this.progress;

    this.txtProgress.nativeElement.value = this.progress;

    this.progressChange.emit(this.progress);
  }

  changeValue(value: number){

    if (this.progress >= 100 && value > 0 ) {
      this.progress = 100;
      return;
    }

    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }

    this.progress += value;
    this.progressChange.emit(this.progress);

    this.txtProgress.nativeElement.focus();
  }

}
