class TweetsResponse:

    def __init__(self, response):
        if response is not None:
            self.status = "OK"
            self.totalResults = response.meta['result_count']
            author_dict = self.create_author_dict(response.includes['users'])
            self.tweets = self.create_tweets_list(response.data, author_dict)
        else:
            self.status = "ERROR"
            self.totalResults = 0
            self.tweets = []
        
        
    
    def create_author_dict(self, author_list):
        author_dict = {}

        for user in author_list:
            author_dict[user.id] = {
                'username': user.username,
                'name': user.name
            }
        
        return author_dict

    def create_tweets_list(self, data, author_dict):

        tweets_list = []
        for tweet_item in data:
            author = author_dict[tweet_item.author_id]
            tweet = Tweet(
                tweet_id = tweet_item.id,
                author_username=author['username'],
                author_name=author['name'],
                created_at=tweet_item.created_at,
                content=tweet_item.text)
            tweets_list.append(tweet)
        return tweets_list

class Tweet:

    def __init__(self, tweet_id, author_username, author_name, created_at, content):
        self.tweet_id = str(tweet_id)
        self.author_username = author_username
        self.author_name = author_name
        self.created_at = created_at
        self.content = content