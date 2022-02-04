import { Component, OnInit } from '@angular/core';
import { LinkModel } from 'src/app/models/LinkModel';
import { ExtLinksService } from 'src/app/services/ext-links.service';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  extLinkModelList: LinkModel[];
  extLinkArticleList: LinkModel[];

  constructor(private modelLinkListService: ExtLinksService, 
    private articleLinkListService: ExtLinksService) { }

    ngOnInit(): void {
      this.extLinkModelList = this.modelLinkListService.getExtModelLinks();
      this.extLinkArticleList = this.modelLinkListService.getExtArticleLinks();
      setTimeout(function() {
        (<any>window).twttr.widgets.load();
      }, 1000);
    }
  
  goUrl(url: string) {
    window.open(url, '_blank');
  }

}

