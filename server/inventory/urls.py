# urls.py
from django.urls import path
from .views import InventoryListCreateView, InventoryDetailView

urlpatterns = [
    path('', InventoryListCreateView.as_view(), name='inventory-list-create'),
    path('<int:pk>/', InventoryDetailView.as_view(), name='inventory-detail')
]
