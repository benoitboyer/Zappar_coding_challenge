import random
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

import requests

from profiles.models import Profile
from .serializers import ProfileSerializer


class ProfileRetrieve(APIView):
    """
    Retrieve a random user from Profile
    """

    def get(self, request):
        # There is several ways to get a random element from the database.
        # this way is one of the safest and less intessive.
        profiles = Profile.objects.all()
        try:
            random_profile = random.choice(profiles)
        except IndexError:
            random_profile = None

        serializer = ProfileSerializer(instance=random_profile)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ProfileImportData(APIView):
    """
    Retrieve a profile from "https://randomuser.me/" and store it to the Profile model
    """

    def get(self, request):
        r = requests.get("https://randomuser.me/api/")
        request_data = r.json()["results"][0]
        data = {}
        # retrieve and reconstruct the fullname
        full_name = None
        first_name = request_data.get("name").get("first")
        last_name = request_data.get("name").get("last")
        if first_name and last_name:
            full_name = (first_name + " " + last_name).title()
        data["name"] = full_name
        data["email"] = request_data.get("email")
        data["phone"] = request_data.get("phone")
        data["picture"] = request_data.get("picture").get("large")
        data["country"] = request_data.get("location").get("state")
        profile_serializer = ProfileSerializer(data=data)
        if profile_serializer.is_valid():
            profile_serializer.save()
            return Response(profile_serializer.data, status=status.HTTP_201_CREATED)
        return Response(profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
