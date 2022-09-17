import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewsArticle, NewsResponse, NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() locations!: string[];
  @Input() crimes!: string[];

  newsResponse!: NewsResponse;

  @Output() newsResponseChanged: EventEmitter<NewsResponse> = new EventEmitter<NewsResponse>();

  constructor(private newsService: NewsService) { }
  
  ngOnInit(): void {
    let newsPromise = new Promise<NewsResponse>((resolve, reject) => {
      this.newsService.getNewsArticles(this.locations, this.crimes, resolve, reject);
    });

    newsPromise.then((newsResponse) => {
      this.newsResponse = newsResponse;
      this.newsResponseChanged.emit(newsResponse);
    });
  }

}
