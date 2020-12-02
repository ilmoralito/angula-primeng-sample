import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-material-app';

  displayDialog = true;
  constructor() {}

  isTrue(): boolean {
    return 1 === 1;
  }
}
