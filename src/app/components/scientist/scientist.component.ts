import { Component, OnInit } from '@angular/core';
import { TwtrFeedsService } from 'src/app/services/twtr-feeds.service';
import { TwitterHandle } from 'src/app/models/TwtrHandle';

@Component({
  selector: 'app-scientist',
  templateUrl: './scientist.component.html',
  styleUrls: ['./scientist.component.css']
})
export class ScientistComponent implements OnInit {
  scientistTwitterList: TwitterHandle[];

  constructor(private scientistsListService: TwtrFeedsService) {
   }

  ngOnInit(): void {
    this.scientistTwitterList = this.scientistsListService.getScientistFeeds();
    setTimeout(function() {
      (<any>window).twttr.widgets.load();
    }, 3000);
  }

  goHomeUrl(homeUrl: string) {
    window.open(homeUrl, '_blank');
  }

}
