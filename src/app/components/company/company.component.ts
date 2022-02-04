import { Component, OnInit } from '@angular/core';
import { TwtrFeedsService } from 'src/app/services/twtr-feeds.service';
import { TwitterHandle } from 'src/app/models/TwtrHandle';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyTwitterList: TwitterHandle[];

  constructor(private companyListService: TwtrFeedsService) {

  }

  ngOnInit(): void {
    this.companyTwitterList = this.companyListService.getCompanyFeeds();
    setTimeout(function() {
      (<any>window).twttr.widgets.load();
    }, 3000);
  }
  
  goHomeUrl(homeUrl: string) {
    window.open(homeUrl, '_blank');
  }

}
