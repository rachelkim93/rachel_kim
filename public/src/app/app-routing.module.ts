import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutMeComponent} from './header/about-me/about-me.component';
import {ContactComponent} from './header/contact/contact.component';
import {MiscComponent} from './header/misc/misc.component';
import {PortfolioComponent} from './header/portfolio/portfolio.component';
import {IndexComponent} from './header/index/index.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'index',          component: IndexComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'misc', component: MiscComponent },
  { path: 'portfolio', component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
