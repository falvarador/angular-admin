import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styles: [
  ],
})
export class DoughnutChartComponent implements OnInit {

  @Input() Title = 'Title';
  @Input() ChartLabels: Label[] = ['Labels'];
  @Input() ChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  @Input() ChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
