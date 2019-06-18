import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  count: number;

  constructor(private dashboardService: DashboardService) { 
    this.dashboardService.currentCartCount.subscribe(cartCount => this.count = cartCount)
  }

  ngOnInit() {
    this.dashboardService.currentCartCount.subscribe(count => this.count = count);
  }
}
