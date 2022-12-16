import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';
import { ScientistComponent } from './components/scientist/scientist.component';
import { OrgComponent } from './components/org/org.component';
import { StateComponent } from './components/state/state.component';
import { MediaComponent } from './components/media/media.component';
import { CompanyComponent } from './components/company/company.component';
import { LinksComponent } from './components/links/links.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'scientist', component: ScientistComponent},
  {path: 'org', component: OrgComponent},
  {path: 'state', component: StateComponent},
  {path: 'media', component: MediaComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'links', component: LinksComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
