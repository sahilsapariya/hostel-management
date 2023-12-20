from django.urls import path
from .views import *

urlpatterns = [
    path('', RoomsAPIView.as_view(), name="rooms-view"),
    path('<int:pk>/', RoomAPIView.as_view(), name="room-detail"),
]