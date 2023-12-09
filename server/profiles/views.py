from django.shortcuts import render

from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView


from .models import *
from .serializers import *

# Authentication imports
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


# Create your views here.


class HomeView(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": "Hello, World!"})
    

# def get_book(request):
#     book_objs = Book.objects.all()
#     serializer = BookSerializer(book_objs, many=True)
#     return Response({'status': 200, 'payload': serializer.data})


# class RegisterUser(APIView):
#     def post(self, request):
#         serializer = UserSerializer(data=request.data)

#         if not serializer.is_valid():
#             return Response({'status': 403, "errors": serializer.errors, 'message': 'Something went wrong'})

#         serializer.save()

#         user = User.objects.get(username=serializer.data['username'])
#         # token_obj, _ = Token.objects.get_or_create(user=user)
#         refresh = RefreshToken.for_user(user)

#         return Response({"status": 200, 
#                          "message": "Student added", 
#                          'refresh': str(refresh),
#                          'access': str(refresh.access_token), 
#                          "payload": serializer.data})


# class StudentAPI(APIView):

#     authentication_classes = [JWTAuthentication]
#     permission_classes = [IsAuthenticated]


#     def get(self, request):
#         student_obj = Student.objects.all()
#         serializer = StudentSerializer(student_obj, many=True)

#         return Response({"payload": serializer.data, "status": "200"})

#     def post(self, request):
#         data = request.data
#         serializer = StudentSerializer(data=request.data)

#         if serializer.is_valid():
#             serializer.save()
#             return Response({"status": 200, "message": "data sent", "payload": data})

#         return Response({'status': 403, "errors": serializer.errors, 'message': 'Something went wrong'})

#     def put(self, request):
#         pass

#     def patch(self, request, id):
#         try:
#             student_obj = Student.objects.get(id=id)
#             serializer = StudentSerializer(student_obj, data=request.data, partial=True)

#             if serializer.is_valid():
#                 serializer.save(instance=student_obj)
#                 return Response({"status": 200, "message": "Student updated", "payload": serializer.data})

#             return Response({'status': 403, "errors": serializer.errors, 'message': 'Something went wrong'})

#         except Student.DoesNotExist:
#             return Response({'status': 404, 'message': 'Invalid student id'})

#         except Exception as e:
#             return Response({'status': 500, 'message': 'Internal server error', 'error': str(e)})


#     def delete(self, request, id):
#         try: 
#             student_obj = Student.objects.get(id=id)
#             student_obj.delete()
#             return Response({'status': 200, 'message': 'student record deleted'})
            
#         except Exception as e:
#             return Response({'status': 403, 'message': 'invalid id'})
