from django.urls import path, include
from .views import *

urlpatterns = [
    path('test', HomeView.as_view(), name="home"),
]