from django.urls import path

from FetchTweets import views

urlpatterns = [
    path('', views.Tweets.as_view()),
]