import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNewsArticles(locations: string[], crimes: string[], resolve: any, reject?: any) {
    const news_articles_url = "http://127.0.0.1:8000/fetch_news/";
    const news_observable: Observable<NewsResponse> = 
      this.http.post<NewsResponse>(
        news_articles_url,
        {
          locations: locations,
          crime_types: crimes
        },
      );

    news_observable.subscribe((data: NewsResponse) => {
      console.log(data);
      resolve(data);
    })
  }  
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}

export interface NewsArticle {
  source: {id: string, name: string};
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}