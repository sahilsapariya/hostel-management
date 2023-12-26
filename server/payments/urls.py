from .views import *
from django.urls import path


urlpatterns = [
    path('bill/<int:pk>/', BillView.as_view(), name="bill-operations"),
    path('bill/', BillView.as_view(), name="get-single-bill-details"),
    path('bills/', BillsView.as_view(), name="all-bill-detail"),
]