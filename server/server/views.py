from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from rooms.models import *
from rooms.serializers import *
from profiles.models import *
from profiles.serializers import *
# from fees.models import *
# from fees.serializers import *

# Authentication imports
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class HomeView(APIView):

    # authentication_classes = [IsAuthenticated]
    # permission_classes = [JWTAuthentication]

    def get(self, request):
        students = Students.objects.all().count()
        cleaners = Cleaners.objects.all().count()
        cooks = Cooks.objects.all().count()
        guards = Guards.objects.all().count()

        rooms = Room.objects.all().count()

        response = {
            "students": students,
            "cleaners": cleaners,
            "guards": guards,
            "cooks": cooks,
            "rooms": rooms
        }
        return Response(data=response)