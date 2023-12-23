from rest_framework import serializers
from .models import *
from profiles.serializers import StudentsSerializer


class RoomSerializer(serializers.ModelSerializer):
    students = StudentsSerializer(many=True, read_only=True, source='students_set')

    class Meta:
        model = Room
        fields = [field.name for field in Room._meta.fields] + ['students']