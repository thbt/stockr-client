import { Component } from '@angular/core';

import { faWallet, faHistory } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  portfolioIcon = faWallet;
  historyIcon = faHistory;
}
