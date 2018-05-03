import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count = 0;
  imgSource = './../favicon.ico';
  enabled = true;
  
  increment() {
    this.count = this.count + 1;
    this.enabled = this.enabled ? false : true;
  }
}
