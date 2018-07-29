import { Component, OnInit } from '@angular/core';

export interface Holding {
  symbol: string;
  quantity: number;
  currentValue: number;
}

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {
  displayedColumns: string[] = ['symbol', 'quantity', 'currentValue', 'actions'];
  dataSource = [
    { symbol: 'AAPL', quantity: 1, currentValue: 190.98 },
    { symbol: 'GOOG', quantity: 2, currentValue: 1238.50 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
