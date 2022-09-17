from django.http.request import QueryDict
from django.http import JsonResponse
from FetchTweets.TweetsHelper import TweetsHelper
from FetchTweets.data_structures import TweetsResponse
from rest_framework.views import APIView
import tweepy
from CrimeMapperAPI.settings import TWITTER_BEARER_TOKEN
from .serializers import TweetsResponseSerializer
# Create your views here.

class Tweets(APIView):

    def post(self, request):
        twitterapi = tweepy.Client(bearer_token=TWITTER_BEARER_TOKEN)
        if type(request.data) == QueryDict:
            locations = request.data.getlist('locations')
            crime_types = request.data.getlist('crime_types')
        else:
            locations = request.data['locations']
            crime_types = request.data['crime_types']
        if type(locations) == str:
            locations = [locations]
        if type(crime_types) == str:
            crime_types = [crime_types]
        query = TweetsHelper.formQuery(crime_types=crime_types, locations=locations)
        try:
            all_tweets = twitterapi.search_recent_tweets(query,
                max_results=TweetsHelper.max_results,
                expansions=TweetsHelper.expansions,
                tweet_fields=TweetsHelper.tweet_fields)
        except:
            all_tweets = None

        tweets_response = TweetsResponse(all_tweets)
        serializer = TweetsResponseSerializer(tweets_response)

        return JsonResponse(serializer.data)