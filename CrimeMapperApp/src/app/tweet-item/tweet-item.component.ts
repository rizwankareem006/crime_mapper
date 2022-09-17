import { Component, Input, OnInit } from '@angular/core';
import { TweetItem } from '../tweets.service';

@Component({
  selector: 'app-tweet-item',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.css']
})
export class TweetItemComponent implements OnInit {

  @Input() tweet!: TweetItem;
  
  constructor() { }

  ngOnInit(): void {
  }

}
