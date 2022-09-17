from django.urls import path

from ReverseGeocoding import views

urlpatterns = [
    path('', views.ReverseGeocoding.as_view()),
]