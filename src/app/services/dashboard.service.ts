import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ad } from '../models/ad';
import { BehaviorSubject } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  cartCount = new BehaviorSubject<number>(0);
  currentCartCount = this.cartCount.asObservable();

  constructor(private httpClient: HttpClient) { }

  apiURL: string = 'https://seekasia-assignment-server.herokuapp.com';

  classicImage = './../../../assets/images/classic.jpg';
  standoutImage = './../../../assets/images/standout.jpg';
  premiumImage = './../../../assets/images/premium.jpg';

  ads = [];
  cartAds = [];

  @Output() cartLength: string;

  public getAds(url?: string) {
    return this.httpClient.get<Ad[]>(`${this.apiURL}/ad`);
  }

  AddToCart(id: string) {
    this.cartAds.push(this.ads.filter(x => x.id == id));
    this.cartCount.next(this.cartAds.length);
    console.log(this.cartAds);
  }

  FillResponse(res: Ad[]) {
    for (let ad of res) {
      switch (ad.name) {
        case "classic":
          Object.assign(ad, { img: this.classicImage })
          break;
        case "standout":
          Object.assign(ad, { img: this.standoutImage })
          break;
        case "premium":
          Object.assign(ad, { img: this.premiumImage })
          break;

        default:
          break;
      }
    }
    this.ads = res;
    return res;
  }
}
