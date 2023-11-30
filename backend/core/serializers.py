from .models import (
    Profile,
    Contact,
    Projects,
    Skills,
    Image,
    Visitor,
    ContactForm,
    BrowseHistory
    )
from rest_framework import serializers


class ContactSerializer(serializers.ModelSerializer):
    """Serializer for profile's contacts."""
    class Meta:
        model = Contact
        fields = "__all__"


class SkillSerializer(serializers.ModelSerializer):
    """Serializer for skills."""
    class Meta:
        model = Skills
        fields = "__all__"
        read_only = True


class ImageSerializer(serializers.ModelSerializer):
    """Serializer for Images."""
    class Meta:
        model: Image
        field = '__all__'
        read_only = True


class ProjectSerializer(serializers.ModelSerializer):
    """Serializer for projects with skills."""
    class Meta:
        model = Projects
        fields = '__all__'
        read_only = True
        depth = 1


class ProfileSerializer(serializers.ModelSerializer):
    """Serializer for genereal profile information."""

    contacts = ContactSerializer(read_only=True, many=True, required=False, allow_null=True)

    class Meta:
        model = Profile
        fields = ["id", "name", "email", "description", "about", "contacts"]
        read_only = True


class VisitorSerializer(serializers.ModelSerializer):
    """Serializer for anonymous visitor model"""
    class Meta:
        model = Visitor
        fields = '__all__'


class ContactFormSerializer(serializers.ModelSerializer):
    """ContactForm model serializers."""
    visitor = serializers.CharField(max_length=255, required=False, allow_null=True)

    class Meta:
        model = ContactForm
        fields = ["name", "email", "message", "visitor"]

    def create(self, validated_data):
        visitor = self.get_visitor_or_none(validated_data)
        if visitor:
            validated_data["visitor"] = visitor
        contact_form = ContactForm.objects.create(**validated_data)
        return contact_form

    def get_visitor_or_none(self, validated_data):
        """Method for returning visitor or none."""
        visitor_uid = validated_data.get('visitor')
        qs = Visitor.objects.filter(uid=visitor_uid)
        if visitor_uid and qs.exists():
            return qs.first()

        return None


class BrowseHistorySerializer(serializers.ModelSerializer):
    """Serializer for BrowseHistory Model."""
    visitor = serializers.CharField(max_length=255, required=False)

    class Meta:
        model = BrowseHistory
        fields = "__all__"

    def create(self, validated_data):
        visitor = self.get_visitor_or_none(validated_data)
        if visitor:
            validated_data["visitor"] = visitor
        else:
            validated_data["visitor"] = None
        browse_data = BrowseHistory.objects.create(**validated_data)
        return browse_data

    def get_visitor_or_none(self, validated_data):
        """Method for returning visitor or none."""
        visitor_uid = validated_data.get('visitor')
        qs = Visitor.objects.filter(uid=visitor_uid)
        if visitor_uid and qs.exists():
            return qs.first()

        return None
