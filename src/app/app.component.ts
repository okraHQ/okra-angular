import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular8OkraExample';

  okraCancel(json) {
    this.title = 'Okra widget closed';
    console.log(this.title, json);
  }

  okraDone(json) {
    console.log('Okra successful', json);
  }
}
