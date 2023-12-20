from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
from .models import *
from rest_framework import status

# Authentication imports
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class RoomsAPIView(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        rooms = Room.objects.all()
        serializer = RoomSerializer(rooms, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = RoomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RoomAPIView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        room = Room.objects.filter(pk=pk).first()
        if room:
            serializer = RoomSerializer(room, many=False)
            return Response(serializer.data)
        else:
            return Response({"detail": "Room not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        room = Room.objects.filter(pk=pk).first()
        if room:
            serializer = RoomSerializer(room, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"detail": "Room not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        room = Room.objects.filter(pk=pk).first()
        if room:
            room.delete()
            return Response({"detail": "Room deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        else:
            return Response({"detail": "Room not found"}, status=status.HTTP_404_NOT_FOUND)
