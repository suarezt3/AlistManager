import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [ CommonModule, RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule]
})
export class DashboardComponent implements OnInit {
  isCollapsed = false;

  constructor() { }

  ngOnInit() { }

}
