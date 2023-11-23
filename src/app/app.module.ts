import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TravelTipsComponent } from './travel-tips/travel-tips.component';
import { ResourcesComponent } from './resources/resources.component';
import { CardComponent } from './card/card.component';
import { TextstyleDirective } from './textstyle.directive';
import { ImagesizeDirective } from './imagesize.directive';
import { NextDestinationComponent } from './next-destination/next-destination.component';
import { HeadingstyleDirective } from './headingstyle.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    TravelTipsComponent,
    ResourcesComponent,
    CardComponent,
    TextstyleDirective,
    ImagesizeDirective,
    NextDestinationComponent,
    HeadingstyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
