import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { CrimeTypeComponent } from './crime-type/crime-type.component';
import { LocationsComponent } from './locations/locations.component';
import { CrimeMapperComponent } from './crime-mapper/crime-mapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { UnderscoreToSpacePipe } from './underscore-to-space.pipe';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NewsComponent } from './news/news.component';
import { TweetsComponent } from './tweets/tweets.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { TweetItemComponent } from './tweet-item/tweet-item.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    CrimeTypeComponent,
    LocationsComponent,
    CrimeMapperComponent,
    UnderscoreToSpacePipe,
    FirstComponent,
    SecondComponent,
    NewsComponent,
    TweetsComponent,
    NewsArticleComponent,
    TweetItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
