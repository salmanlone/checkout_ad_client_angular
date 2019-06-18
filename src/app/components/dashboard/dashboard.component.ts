import { Component, OnInit } from '@angular/core';
import { AdApiService } from './../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private adApiService: AdApiService) { }

  ngOnInit() {
    this.adApiService.getAds().subscribe((res) =>{
      console.log(res);
    });
  }

}
