import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChartDemo';

  barChartLabels=['OneOneOneOne', 'TwoTwoTwoTwo', 'ThreeThreeThreeThree', 'FourFourFourFour', 'FiveFiveFiveFive'];

  barChartDatasets=[
    {
      data:[100,200,300,400,500]
    }
  ]

  barChartOptions: ChartOptions<'pie'>={
    plugins:{
      legend: {
        display: true,
        position: 'right',
        align: 'start'
      }
    },
    responsive: true,
    maintainAspectRatio: true,
    layout:{
      padding: 4
    },
    aspectRatio: 2,
  };

}
