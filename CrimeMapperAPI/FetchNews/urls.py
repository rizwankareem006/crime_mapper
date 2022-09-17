from django.urls import path

from FetchNews import views

urlpatterns = [
    path('', views.NewsArticles.as_view()),
]