import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = 'http://localhost:3000/element/main-es5.js';
  title = 'fed-core';

  public onEventEmitted(): void {
    window.alert('You like me! <3');
  }

}
