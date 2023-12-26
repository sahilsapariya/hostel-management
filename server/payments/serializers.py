from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *

class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = "__all__"