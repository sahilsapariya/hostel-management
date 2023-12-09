
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *
import hashlib



class UserSerializer(serializers.ModelSerializer):

    class Meta: 
        model = User
        fields = ['username', 'password']
    
    def create(self, validated_data):
        user = User.objects.create(username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        return user
    


class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = '__all__'

        def create(self, validated_data):
            aadhar_number = validated_data.get('aadhar_number', '')
            hashed_aadhar_number = hashlib.sha256(aadhar_number.encode()).hexdigest()
            
            validated_data['aadhar_number'] = hashed_aadhar_number

            return super().create(validated_data)