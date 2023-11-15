"""
Views for general purposes.
"""


from django.shortcuts import render
from rest_framework import viewsets, generics
from .models import Profile
from .serializers import ProfileSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.filter(is_latest=True)
    serializer_class = ProfileSerializer
