import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  ads = [];
  count:number;

  constructor(private dashboardService: DashboardService) { 
    this.dashboardService.currentCartCount.subscribe(cartCount => this.count = cartCount)
  }

  ngOnInit() {
    this.GetAds();
  }

  GetAds(){
    this.dashboardService.getAds().subscribe((res) => {
      this.ads =this.dashboardService.FillResponse(res)
    });
  }

  AddToCart(id: string){
    this.dashboardService.AddToCart(id);
  }
}
