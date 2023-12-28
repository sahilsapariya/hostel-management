# views.py
from rest_framework import generics
from .models import Inventory
from .serializers import InventorySerializer

# Authentication imports
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class InventoryListCreateView(generics.ListCreateAPIView):

    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer

class InventoryDetailView(generics.RetrieveUpdateDestroyAPIView):

    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer
