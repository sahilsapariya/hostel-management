from django.urls import path
from .views import *

urlpatterns = [
    path('test', HomeView.as_view(), name="home"),
    path('students/', StudentsView.as_view(), name="students-view"),
    path('student/', StudentsView.as_view(), name="student-view"),
    path('student/<int:pk>/', StudentView.as_view(), name="student-detail"),
]