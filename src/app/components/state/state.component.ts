import { Component, OnInit } from '@angular/core';
import { TwtrFeedsService } from 'src/app/services/twtr-feeds.service';
import { TwitterHandle } from 'src/app/models/TwtrHandle';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  stateTwitterList: TwitterHandle[];
  intlTwitterList: TwitterHandle[];

  constructor(private stateListService: TwtrFeedsService) {

  }

  ngOnInit(): void {
    this.stateTwitterList = this.stateListService.getStateFeeds();
    this.intlTwitterList = this.stateListService.getIntlFeeds();
    setTimeout(function() {
      (<any>window).twttr.widgets.load();
    }, 3000);

  }

  goHomeUrl(homeUrl: string) {
    window.open(homeUrl, '_blank');
  }
}

