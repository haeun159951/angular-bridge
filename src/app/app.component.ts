import { Component } from '@angular/core';
import { Bridge } from './bridge';
@Component({
  selector: 'app-root', //<App-Root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular bridge';
  currentBridge: Bridge;

  handleBridgeChange(bridge: Bridge) {
    console.log('bridge change', bridge);
    this.currentBridge = bridge;
  }
}
