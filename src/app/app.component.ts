import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFront';
  events: string[] = [];
  opened: boolean;
  color = 'primary';
  mode = 'determinate';
}
