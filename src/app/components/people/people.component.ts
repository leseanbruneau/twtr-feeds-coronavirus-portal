import { Component, OnInit } from '@angular/core';
import { TwtrFeedsService } from 'src/app/services/twtr-feeds.service';
import { TwitterHandle } from 'src/app/models/TwtrHandle';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  scientistTwitterList: TwitterHandle[];
  mediaTwitterList: TwitterHandle[];

  constructor(private scientistsListService: TwtrFeedsService, 
    private mediaListService: TwtrFeedsService) { }


    ngOnInit(): void {
      this.scientistTwitterList = this.scientistsListService.getScientistFeeds();
      this.mediaTwitterList = this.mediaListService.getMediaFeeds();
      setTimeout(function() {
        (<any>window).twttr.widgets.load();
      }, 3000);
    }
  
    goHomeUrl(homeUrl: string) {
      window.open(homeUrl, '_blank');
    }

}

