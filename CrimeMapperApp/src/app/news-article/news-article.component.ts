import { Component, Input, OnInit } from '@angular/core';
import { NewsArticle } from '../news.service';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent implements OnInit {

  @Input() article!: NewsArticle;
  
  constructor() { }

  ngOnInit(): void {
  }

}
