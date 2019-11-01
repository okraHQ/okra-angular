import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular8OkraExample';

  okraCancel() {
    this.title = 'Okra widget closed';
    console.log(this.title);
  }

  okraDone() {
    console.log('Okra successful');
  }
}
