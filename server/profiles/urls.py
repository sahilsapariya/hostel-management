from django.urls import path
from .views import *

urlpatterns = [
    path('test', HomeView.as_view(), name="home"),
    
    path('students/', StudentsView.as_view(), name="students-view"),
    path('student/', StudentView.as_view(), name="student-view"),
    path('student/<int:pk>/', StudentView.as_view(), name="student-detail"),

    path('cleaners/', CleanersView.as_view(), name="cleaners-view"),
    path('cleaner/', CleanerView.as_view(), name="cleaner-view"),
    path('cleaner/<int:pk>/', CleanerView.as_view(), name="cleaner-detail"),

    path('cooks/', CooksView.as_view(), name="cooks-view"),
    path('cook/', CookView.as_view(), name="cook-view"),
    path('cook/<int:pk>/', CookView.as_view(), name="cook-detail"),

    path('guards/', GuardsView.as_view(), name="guards-view"),
    path('guard/', GuardView.as_view(), name="guard-view"),
    path('guard/<int:pk>/', GuardView.as_view(), name="guard-detail"),
]