import { Component, OnInit } from '@angular/core';
import { TwtrFeedsService } from 'src/app/services/twtr-feeds.service';
import { TwitterHandle } from 'src/app/models/TwtrHandle';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {
  orgTwitterList: TwitterHandle[];

  constructor(private orgListService: TwtrFeedsService) {

  }

  ngOnInit(): void {
    this.orgTwitterList = this.orgListService.getOrganizationFeeds();
    setTimeout(function() {
      (<any>window).twttr.widgets.load();
    }, 3000);

  }

    
  goHomeUrl(homeUrl: string) {
    window.open(homeUrl, '_blank');
  }

}
