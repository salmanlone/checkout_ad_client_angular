import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ad } from './../models/ad';

@Injectable({
  providedIn: 'root'
})
export class AdApiService {
  apiURL: string = 'https://seekasia-assignment-server.herokuapp.com';
  constructor(private httpClient: HttpClient) { }

  public getAds(url?: string) {
    return this.httpClient.get<Ad[]>(`${this.apiURL}/ad`);
  }
}
