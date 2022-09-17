from django.http.request import QueryDict
from django.http import JsonResponse
from CrimeMapperAPI.settings import NEWS_API_KEY
from FetchNews.NewsArticlesHelper import NewsArticlesHelper
from rest_framework.views import APIView
from newsapi import NewsApiClient

# Create your views here.

class NewsArticles(APIView):

    def post(self, request):
        newsapi = NewsApiClient(api_key=NEWS_API_KEY)
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

        query = NewsArticlesHelper.formQuery(crime_types=crime_types, locations=locations)
        all_articles = newsapi.get_everything(
            q=query,
            from_param=NewsArticlesHelper.getFromDate(),
            to=NewsArticlesHelper.getToDate(),
            language=NewsArticlesHelper.language,
            sort_by=NewsArticlesHelper.sortBy,
            page_size=NewsArticlesHelper.pageSize 
        )
        #json_data = JSONRenderer.render(all_articles)
        return JsonResponse(all_articles)

