"""
Views for general purposes.
"""

from rest_framework import viewsets, status, generics
from rest_framework.response import Response
from .models import (Profile,
                     Skills,
                     Projects,
                     Visitor,
                     ContactForm,
                     BrowseHistory)
from .serializers import (
    ProfileSerializer,
    SkillSerializer,
    ProjectSerializer,
    ContactFormSerializer,
    VisitorSerializer,
    BrowseHistorySerializer)


class CustomBaseViewSet(viewsets.ModelViewSet):
    """Custom base viewset for disabling other methods than RETRIEVE."""
    def create(self, request):
        return Response(
            {'message': 'Method not allowed'},
            status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def update(self, request, pk=None):
        return Response(
            {'message': 'Method not allowed'},
            status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def partial_update(self, request, pk=None):
        return Response(
            {'message': 'Method not allowed'},
            status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def destroy(self, request, pk=None):
        return Response(
            {'message': 'Method not allowed'},
            status=status.HTTP_405_METHOD_NOT_ALLOWED)


class ProfileView(viewsets.ReadOnlyModelViewSet):
    queryset = Profile.objects.filter(is_latest=True)
    serializer_class = ProfileSerializer


class ProjectView(CustomBaseViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectSerializer


class SkillView(viewsets.ReadOnlyModelViewSet):
    queryset = Skills.objects.all()
    serializer_class = SkillSerializer


class VisitorView(generics.CreateAPIView):
    queryset = Visitor.objects.all()
    serializer_class = VisitorSerializer

    def create(self, request):
        """Create a new visitor."""
        serializer = VisitorSerializer(data=request.data)
        if serializer.is_valid():
            visitor = Visitor.objects.create(
                lang=serializer.validated_data['lang']
            )
            data = VisitorSerializer(visitor)
            return Response(
                data.data,
                status=status.HTTP_201_CREATED
            )
        else:
            return Response(
                {'message': 'Error'},
                status=status.HTTP_400_BAD_REQUEST)


class ContactFormCreateView(generics.CreateAPIView):
    """Generic view for new contact form."""
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer


class BrowseHistoryCreateView(generics.CreateAPIView):
    """Generic view for new browse history"""
    queryset = BrowseHistory.objects.all()
    serializer_class = BrowseHistorySerializer
