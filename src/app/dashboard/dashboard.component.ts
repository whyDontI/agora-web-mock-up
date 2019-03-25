import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  elections = 2;
  pendingElections = 1;
  activeElections = 1;
  finishedElections = 0;
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
