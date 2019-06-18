import { Component, OnInit } from '@angular/core';
import { AdApiService } from './../../services/dashboard.service';
import { Ad } from 'src/app/models/ad';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private ads = [];
  private cartAds = [];
  private classicImage = '';
  private standoutImage = '';
  private premiumImage = '';

  constructor(private adApiService: AdApiService) {
    this.classicImage = './../../../assets/images/classic.jpg';
    this.standoutImage = './../../../assets/images/standout.jpg';
    this.premiumImage = './../../../assets/images/premium.jpg';
  }

  ngOnInit() {
    this.adApiService.getAds().subscribe((res) => {
      console.log(res);
      this.FillResponse(res)
      this.ads = res;
    });
  }

  FillResponse(res: Ad[]) {
    for (let ad of res) {
      switch (ad.name) {
        case "classic":
          ad.img = this.classicImage;
          break;
        case "standout":
          ad.img = this.standoutImage;
          break;
        case "premium":
          ad.img = this.premiumImage;
          break;

        default:
          break;
      }
    }
  }
}
