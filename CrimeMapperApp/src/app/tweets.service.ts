import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private http: HttpClient) { }

  getTweets(locations: string[], crimes: string[], resolve: any, reject?: any) {
    const tweets_url = "http://127.0.0.1:8000/fetch_tweets/";
    const tweets_observable: Observable<TweetsResponse> = 
      this.http.post<TweetsResponse>(
        tweets_url,
        {
          locations: locations,
          crime_types: crimes
        },
      );

    tweets_observable.subscribe((data: TweetsResponse) => {
      console.log(data);
      for (let i = 0; i < data.tweets.length ; i++) {
        data.tweets[i].content = URLReplacer(data.tweets[i].content);
      }
      resolve(data);
    })
  }
}

function URLReplacer(str: string){
  let match = str.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
  let final=str;
  if (match !== null){
    match.map((url: string) => {
        final=final.replace(url," <a href=\""+url+"\" target=\"_BLANK\">"+url+"</a> ")
    })
  }
  return final;
}
export interface TweetsResponse{
  status: string;
  totalResults: number;
  tweets: TweetItem[];
}

export interface TweetItem{
  tweet_id: string;
  author_username: string;
  author_name: string;
  created_at: string;
  content: string;
}