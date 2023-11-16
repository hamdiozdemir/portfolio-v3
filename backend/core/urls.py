"""
URLs for APIs.
"""

from rest_framework import routers
from .views import ProfileViewSet
from django.urls import path, include

app_name = 'core'

router = routers.DefaultRouter()
router.register(r'profile', ProfileViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
