"""
URLs for APIs.
"""

from django.urls import path, include
from rest_framework import routers
from .views import (
    ProfileView,
    ProjectView,
    VisitorView,
    ContactFormCreateView)

app_name = 'core'

router = routers.DefaultRouter()
router.register(r'projects', ProjectView)

urlpatterns = [
    path('', include(router.urls)),
    path('profile/', ProfileView.as_view({'get': 'list'}), name='profile'),
    path('visitors/', VisitorView.as_view(), name='visitors'),
    path('contact-form/',
         ContactFormCreateView.as_view(), name='contact-form'),
]
