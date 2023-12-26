from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .models import *
from .serializers import *

# Authentication imports
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


    

class StudentsView(APIView):

    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request):
        students = Students.objects.all()
        serializer = StudentsSerializer(students, many=True)
        return Response(data=serializer.data)


class StudentView(APIView):

    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        try:
            student = Students.objects.get(pk=pk)
            serializer = StudentsSerializer(student, many=False)
            return Response(serializer.data)
        except Students.DoesNotExist:
            return Response({"error": "Student not found"}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        serializer = StudentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        
        student = Students.objects.get(pk=pk)
        
        serializer = StudentsSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        student = Students.objects.get(pk=pk)
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)





class CleanersView(APIView):

    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request):
        cleaners = Cleaners.objects.all()
        serializer = CleanersSerializer(cleaners, many=True)
        return Response(data=serializer.data)


class CleanerView(APIView):

    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        try:
            cleaner = Cleaners.objects.get(pk=pk)
            serializer = CleanersSerializer(cleaner, many=False)
            return Response(serializer.data)
        except Cleaners.DoesNotExist:
            return Response({"error": "Cleaner not found"}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        serializer = CleanersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        
        cleaner = Cleaners.objects.get(pk=pk)
        
        serializer = CleanersSerializer(cleaner, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        cleaner = Cleaners.objects.get(pk=pk)
        cleaner.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class CooksView(APIView):

    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request):
        cooks = Cooks.objects.all()
        serializer = CooksSerializer(cooks, many=True)
        return Response(data=serializer.data)


class CookView(APIView):

    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        try:
            cook = Cooks.objects.get(pk=pk)
            serializer = CooksSerializer(cook, many=False)
            return Response(serializer.data)
        except Cooks.DoesNotExist:
            return Response({"error": "Cook not found"}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        serializer = CooksSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        
        cook = Cooks.objects.get(pk=pk)
        
        serializer = CooksSerializer(cook, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        cook = Cooks.objects.get(pk=pk)
        cook.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class GuardsView(APIView):

    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request):
        guards = Guards.objects.all()
        serializer = GuardsSerializer(guards, many=True)
        return Response(data=serializer.data)


class GuardView(APIView):

    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        try:
            guard = Guards.objects.get(pk=pk)
            serializer = GuardsSerializer(guard, many=False)
            return Response(serializer.data)
        except Guards.DoesNotExist:
            return Response({"error": "Guard not found"}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        serializer = GuardsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        
        guard = Guards.objects.get(pk=pk)
        
        serializer = GuardsSerializer(guard, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        guard = Guards.objects.get(pk=pk)
        guard.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
