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

from drf_spectacular.utils import (
    extend_schema_view,
    extend_schema,
    OpenApiParameter,
    OpenApiTypes,
)
import uuid


def is_valid_uuid(val):
    try:
        uuid.UUID(str(val))
        return True
    except ValueError:
        return False


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


@extend_schema_view(
    get=extend_schema(
        parameters=[
            OpenApiParameter(
                'visitor',
                OpenApiTypes.STR,
                description='Visitor UID required.'
            )
        ]
    )
)
class BrowseHistoryListCreateView(generics.ListCreateAPIView):
    """Generic view for new browse history"""
    queryset = BrowseHistory.objects.all()
    serializer_class = BrowseHistorySerializer

    def get_queryset(self):
        visitor_uid = self.request.query_params.get('visitor', None)
        if not visitor_uid and not is_valid_uuid(visitor_uid):
            return None
        queryset = BrowseHistory.objects.filter(visitor__uid=visitor_uid).order_by('-timestamp')
        return queryset
