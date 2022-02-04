import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* use LocationStrategy and HashLocationStrategy if deployed to web server */
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CompanyComponent } from './components/company/company.component';
import { HomeComponent } from './components/home/home.component';
import { LinksComponent } from './components/links/links.component';
import { MediaComponent } from './components/media/media.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OrgComponent } from './components/org/org.component';
import { PeopleComponent } from './components/people/people.component';
import { ScientistComponent } from './components/scientist/scientist.component';
import { StateComponent } from './components/state/state.component';
import { TwtrFeedsService } from './services/twtr-feeds.service';
import { ExtLinksService } from './services/ext-links.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CompanyComponent,
    HomeComponent,
    LinksComponent,
    MediaComponent,
    NavbarComponent,
    NotfoundComponent,
    OrgComponent,
    PeopleComponent,
    ScientistComponent,
    StateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TwtrFeedsService,
    ExtLinksService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
