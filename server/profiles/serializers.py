from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *
import hashlib
from rooms.models import Room

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
    
    def validate_hostel_room_number(self, value):
        """
        Validate the availability of the room for the new student.
        """
        room = Room.objects.filter(room_number=str(value)).first()
        if room:
            # Check the count of students associated with the room through the reverse relation
            students_count = Students.objects.filter(hostel_room_number=room).count()

            if students_count >= room.capacity:
                raise serializers.ValidationError("Room is at full capacity. Cannot add more students.")

        return value


class CooksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cooks
        fields = '__all__'

    def create(self, validated_data):
        aadhar_number = validated_data.get('aadhar_number', '')
        hashed_aadhar_number = hashlib.sha256(aadhar_number.encode()).hexdigest()
        
        validated_data['aadhar_number'] = hashed_aadhar_number

        return super().create(validated_data)


class GuardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guards
        fields = '__all__'

    def create(self, validated_data):
        aadhar_number = validated_data.get('aadhar_number', '')
        hashed_aadhar_number = hashlib.sha256(aadhar_number.encode()).hexdigest()
        
        validated_data['aadhar_number'] = hashed_aadhar_number

        return super().create(validated_data)


class CleanersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cleaners
        fields = '__all__'

    def create(self, validated_data):
        aadhar_number = validated_data.get('aadhar_number', '')
        hashed_aadhar_number = hashlib.sha256(aadhar_number.encode()).hexdigest()
        
        validated_data['aadhar_number'] = hashed_aadhar_number

        return super().create(validated_data)
