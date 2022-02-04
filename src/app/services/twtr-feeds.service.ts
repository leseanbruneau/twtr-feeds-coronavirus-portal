import { Injectable } from '@angular/core';
import { TwitterHandle } from 'src/app/models/TwtrHandle';

@Injectable({
  providedIn: 'root'
})
export class TwtrFeedsService {
  allTwitterFeeds: TwitterHandle[];
  filteredTwitterFeeds: TwitterHandle[];
  rankedTwitterFeeds: TwitterHandle[];

  constructor() {
    this.allTwitterFeeds = [
      {
        name: 'Dr. Scott Gottlieb',
        title: 'Resident Fellow at @AEI; Partner @NEA; CNBC Contributor',
        page: 'scientist',
        order: 1,
        url: 'https://twitter.com/ScottGottliebMD',
        homeUrl: 'https://www.aei.org/profile/scott-gottlieb/'
      },
      {
        name: 'Dr. Tom Frieden',
        title: 'President & CEO @ResolveTSL; Sr Fellow @CFR_org',
        page: 'scientist',
        order: 2,
        url: 'https://twitter.com/DrTomFrieden',
        homeUrl: 'https://www.drtomfrieden.net/'
      },
      {
        name: 'Dr. Michael Osterholm',
        title: 'Director of Center for Infectious Disease Research at University of Minnesota',
        page: 'scientist',
        order: 3,
        url: 'https://twitter.com/mtosterholm',
        homeUrl: 'https://cidrap.umn.edu'
      },
/*      {
        name: 'Dr. Jen Ashton',
        title: 'ABC News Chief Medical Correspondent',
        page: 'scientist',
        order: 4,
        url: 'https://twitter.com/DrJAshton',
        homeUrl: 'https://jenniferashtonmd.com'
      },
*/
      {
        name: 'Institute for Health Metrics and Evaluation',
        title: 'University of Washington',
        page: 'org',
        order: 1,
        url: 'https://twitter.com/IHME_UW',
        homeUrl: 'https://healthdata.org'
      },
      {
        name: 'CIDRAP',
        title: 'University of Minnesota Center for Infectious Disease Research and Policy',
        page: 'org',
        order: 2,
        url: 'https://twitter.com/CIDRAP',
        homeUrl: 'https://www.cidrap.umn.edu'
      },
      {
        name: 'CDC',
        title: 'Centers for Disease Control and Prevention',
        page: 'org',
        order: 3,
        url: 'https://twitter.com/CDCgov',
        homeUrl: 'https://cdc.gov'
      },
      {
        name: 'NIH',
        title: 'National Institutes of Health',
        page: 'org',
        order: 4,
        url: 'https://twitter.com/NIH',
        homeUrl: 'https://www.nih.gov'
      },
      {
        name: 'NIAID',
        title: 'National Institute of Allergy and Infectious Diseases',
        page: 'org',
        order: 5,
        url: 'https://twitter.com/NIAIDNews',
        homeUrl: 'https://niaid.nih.gov'
      },
      {
        name: 'Minnesota - MDH',
        title: 'Minnesota Department of Health',
        page: 'state',
        order: 1,
        url: 'https://twitter.com/mnhealth',
        homeUrl: 'https://www.health.state.mn.gov'
      },
      {
        name: 'North Dakota - NDDOH',
        title: 'North Dakota Department of Health',
        page: 'state',
        order: 2,
        url: 'https://twitter.com/NDDOH',
        homeUrl: 'https://www.health.nd.gov'
      },
      {
        name: 'Wisconsin - DHSWI',
        title: 'Wisconsin Department of Health Services',
        page: 'state',
        order: 3,
        url: 'https://twitter.com/DHSWI',
        homeUrl: 'https://dhs.wisconsin.gov'
      },
      {
        name: 'Iowa - IDPH',
        title: 'Iowa Department of Public Health',
        page: 'state',
        order: 4,
        url: 'https://twitter.com/IAPublicHealth',
        homeUrl: 'https://idph.iowa.gov'
      },
      {
        name: 'Louisiana - LADH',
        title: 'Louisiana Department of Health',
        page: 'state',
        order: 5,
        url: 'https://twitter.com/LADepthealth',
        homeUrl: 'https://LDH.Louisiana.gov'
      },
      {
        name: 'Florida',
        title: 'Florida Department of Public Health',
        page: 'state',
        order: 6,
        url: 'https://twitter.com/HealthyFla',
        homeUrl: 'https://floridahealth.gov'
      },
      {
        name: 'Tom Hauser',
        title: 'Chief Political Reporter KSTP-TV (Twin Cities)',
        page: 'media',
        order: 1,
        url: 'https://twitter.com/thauserkstp',
        homeUrl: 'https://kstp.com'
      },
      {
        name: 'Stocks & Jocks',
        title: 'Chicago Radio AM Show',
        page: 'media',
        order: 2,
        url: 'https://twitter.com/StocksNJocks',
        homeUrl: 'https://stocksandjocks.net'
      },
      {
        name: 'Carl Quintanilla',
        title: 'CNBC and NBC Anchor',
        page: 'media',
        order: 3,
        url: 'https://twitter.com/carlquintanilla',
        homeUrl: 'https://cnbc.com/carl-quintanilla'
      },
      {
        name: 'Medtronic',
        title: 'Medical Device Technology Company',
        page: 'company',
        order: 1,
        url: 'https://twitter.com/medtronic',
        homeUrl: 'https://medtronic.com'
      },
      {
        name: 'Pfizer Inc.',
        title: 'Drug Manufacturer',
        page: 'company',
        order: 2,
        url: 'https://twitter.com/pfizer',
        homeUrl: 'https://pfizer.com'
      },
      {
        name: 'Merck & Co., Inc.',
        title: 'Drug Manufacturer',
        page: 'company',
        order: 2,
        url: 'https://twitter.com/merck',
        homeUrl: 'https://merck.com'
      },
      {
        name: 'Australia - National',
        title: 'Australian Government Department of Health',
        page: 'intl',
        order: 1,
        url: 'https://twitter.com/healthgovau',
        homeUrl: 'https://www.health.gov.au'
      },
      {
        name: 'South Australia - State',
        title: 'SA Health',
        page: 'intl',
        order: 2,
        url: 'https://twitter.com/SAHealth',
        homeUrl: 'https://www.sahealth.sa.gov.au/'
      },
      {
        name: 'United Kingdom - Public Health',
        title: 'Public Health England',
        page: 'intl',
        order: 3,
        url: 'https://twitter.com/DHSCgovuk',
        homeUrl: 'https://www.gov.uk/government/organisations/public-health-england'
      }
      
    ];

   }

   getScientistFeeds(): TwitterHandle[] { 
    
    this.filteredTwitterFeeds = this.allTwitterFeeds.filter(r => r.page === "scientist");
    
    this.rankedTwitterFeeds = this.sortByKey(this.filteredTwitterFeeds, 'order');

     return this.rankedTwitterFeeds;
   }

   getOrganizationFeeds(): TwitterHandle[] { 
    
    this.filteredTwitterFeeds = this.allTwitterFeeds.filter(r => r.page === "org");
    
    this.rankedTwitterFeeds = this.sortByKey(this.filteredTwitterFeeds, 'order');

     return this.rankedTwitterFeeds;
   }

   getStateFeeds(): TwitterHandle[] { 
    
    this.filteredTwitterFeeds = this.allTwitterFeeds.filter(r => r.page === "state");
    
    this.rankedTwitterFeeds = this.sortByKey(this.filteredTwitterFeeds, 'order');

     return this.rankedTwitterFeeds;
   }

   getIntlFeeds(): TwitterHandle[] { 
    
    this.filteredTwitterFeeds = this.allTwitterFeeds.filter(r => r.page === "intl");
    
    this.rankedTwitterFeeds = this.sortByKey(this.filteredTwitterFeeds, 'order');

     return this.rankedTwitterFeeds;
   }

   getMediaFeeds(): TwitterHandle[] { 
    
    this.filteredTwitterFeeds = this.allTwitterFeeds.filter(r => r.page === "media");
    
    this.rankedTwitterFeeds = this.sortByKey(this.filteredTwitterFeeds, 'order');

     return this.rankedTwitterFeeds;
   }

   getCompanyFeeds(): TwitterHandle[] { 
    
    this.filteredTwitterFeeds = this.allTwitterFeeds.filter(r => r.page === "company");
    
    this.rankedTwitterFeeds = this.sortByKey(this.filteredTwitterFeeds, 'order');

     return this.rankedTwitterFeeds;
   }

   sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

}
