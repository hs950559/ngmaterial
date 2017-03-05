import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import { ScreenshotService } from './screenshot.service';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
	screenshots;

	constructor(private screenshotService: ScreenshotService){}

	ngOnInit(){
		this.screenshotService.getScreenshots()
			.subscribe(res => this.screenshots = res);

	}

	likeMe(i) {
    if (this.screenshots[i].liked == 0)
      this.screenshots[i].liked = 1;
    else
      this.screenshots[i].liked = 0;
  }

  deleteMe(i) {
    this.screenshots.splice(i,1);
    console.log(i);
  }

}