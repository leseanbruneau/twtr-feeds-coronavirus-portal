import { Component, OnInit } from '@angular/core';
import { TwtrFeedsService } from 'src/app/services/twtr-feeds.service';
import { TwitterHandle } from 'src/app/models/TwtrHandle';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css'],
    standalone: false
})
export class PeopleComponent implements OnInit {
  scientistTwitterList: TwitterHandle[];
  mediaTwitterList: TwitterHandle[];

  constructor(private scientistsListService: TwtrFeedsService, 
    private mediaListService: TwtrFeedsService) {
      this.scientistTwitterList = this.scientistsListService.getScientistFeeds();
      this.mediaTwitterList = this.mediaListService.getMediaFeeds();
    }


    ngOnInit(): void {
      setTimeout(function() {
        (<any>window).twttr.widgets.load();
      }, 500);
    }
  
    goHomeUrl(homeUrl: string) {
      window.open(homeUrl, '_blank');
    }

    showXTimeline(t: TwitterHandle) {
      console.log("showXTimeline clicked....")
      console.log("value of t: " + t.showTimeline)
      t.showTimeline = !t.showTimeline;
      //window.location.reload()
      setTimeout(function() {
        (<any>window).twttr.widgets.load();
      }, 500);
    }

}

