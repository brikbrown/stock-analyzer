import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-wise';
  display: boolean = false;

  constructor() {
    console.log(this.display);
  }

  toggle(): void {
    this.display = true;
  }
}
