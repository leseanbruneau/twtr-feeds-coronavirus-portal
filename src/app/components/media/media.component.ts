import { Component, OnInit } from '@angular/core';
import { TwtrFeedsService } from 'src/app/services/twtr-feeds.service';
import { TwitterHandle } from 'src/app/models/TwtrHandle';

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.css'],
    standalone: false
})
export class MediaComponent implements OnInit {
  mediaTwitterList: TwitterHandle[];

  constructor(private mediaListService: TwtrFeedsService) {

  }

  ngOnInit(): void {
    this.mediaTwitterList = this.mediaListService.getMediaFeeds();
    setTimeout(function() {
      (<any>window).twttr.widgets.load();
    }, 3000);
  }
  
  goHomeUrl(homeUrl: string) {
    window.open(homeUrl, '_blank');
  }

}
