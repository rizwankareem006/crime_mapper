import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TweetsResponse, TweetsService } from '../tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  @Input() locations?: string[];
  @Input() crimes?: string[];

  tweetsResponse!: TweetsResponse;
  @Output() tweetsResponseChanged: EventEmitter<TweetsResponse> = new EventEmitter<TweetsResponse>(); 
  constructor(private tweetsService: TweetsService) { }

  ngOnInit(): void {
    console.log(this.locations);
    console.log(this.crimes);
    let tweetsPromise = new Promise<TweetsResponse>((resolve, reject) => {
      this.tweetsService.getTweets(this.locations as string[], this.crimes as string[], resolve, reject);
    });

    tweetsPromise.then((tweetsResponse) => {
      console.log(tweetsResponse);
      this.tweetsResponse = tweetsResponse;
      this.tweetsResponseChanged.emit(tweetsResponse);
    });
  }

}
