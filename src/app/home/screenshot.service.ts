import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ScreenshotService {

  constructor(private http: Http) {}

  getScreenshots(){
  	return this.http.get('./assets/data/data.json')
      .map(response => response.json().screenshots);
  }
}
