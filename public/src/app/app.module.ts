import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule }       from '@angular/http';
import { FormsModule }      from '@angular/forms';
import { HttpService }from './http.service';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './header/about-me/about-me.component';
import { PortfolioComponent } from './header/portfolio/portfolio.component';
import { MiscComponent } from './header/misc/misc.component';
import { ContactComponent } from './header/contact/contact.component';
import { IndexComponent } from './header/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    PortfolioComponent,
    MiscComponent,
    ContactComponent,
    IndexComponent
  ],
  imports: [
    DragDropModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }