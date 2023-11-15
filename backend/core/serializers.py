from .models import Profile, Contact
from rest_framework import serializers


class ContactSerializer(serializers.ModelSerializer):
    """Serializer for profile's contacts."""
    class Meta:
        model = Contact
        fields = "__all__"


class ProfileSerializer(serializers.ModelSerializer):
    """Serializer for genereal profile information."""

    contacts = ContactSerializer(many=True, required=False)

    class Meta:
        model = Profile
        fields = ["id", "name", "email", "description", "about", "contacts"]