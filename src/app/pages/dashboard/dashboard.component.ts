import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [ ]
})
export class DashboardComponent implements OnInit {
  isCollapsed = false;

  constructor() { }

  ngOnInit() { }

}
