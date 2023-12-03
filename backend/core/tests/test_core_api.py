from django.test import TestCase
from django.urls import reverse

from rest_framework import status
from rest_framework.test import APIClient

from core.models import (
    Profile,
    Projects,
    Visitor,
    Skills,
    Contact,
    BrowseHistory
)
from core.serializers import (
    ProfileSerializer,
)

PROFILE_URL = reverse('core:profile')
VISITOR_POST_URL = reverse('core:visitors')
CONTACT_FORM_POST_URL = reverse('core:contact-form')
PROJECT_LIST_URL = reverse('core:projects-list')
BROWSER_HISTORY_URL = reverse('core:browse-history')


def create_visitor():
    visitor = Visitor.objects.create(lang='EN-en')
    return visitor


def project_detail_url(project_id):
    return reverse('core:projects-detail', args=[project_id])


class ProfileApiTests(TestCase):
    """Tests for profile related models."""

    def setUp(self):
        self.client = APIClient()

    def test_retrieve_profile(self):
        """Test for retriving profile information."""
        profile = Profile.objects.create(
            name="Test",
            email="test@test.com",
            description="test descrtiption",
            about="About",
            is_latest=True
        )
        Profile.objects.create(
            name="Test",
            email="test2new@test.com",
            description="test descrtiption",
            about="About",
            is_latest=False
        )
        contact = Contact.objects.create(
            website='www.test.com',
            email='test2@test.com',
            phone=537333333
        )
        profile.contacts.add(contact)

        res = self.client.get(PROFILE_URL)
        profile_list = Profile.objects.filter(is_latest=True)
        serializer = ProfileSerializer(profile_list, many=True)
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)

    def test_create_new_visitor_success(self):
        """Test for creating new visitor."""
        payload = {'lang': 'TR-tr'}
        response = self.client.post(VISITOR_POST_URL, payload)
        visitor = Visitor.objects.filter(uid=response.data['uid']).exists()
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(visitor)

    def test_retrive_visitors_error(self):
        """Test retrive visitors error."""
        response = self.client.get(VISITOR_POST_URL)
        self.assertEqual(response.status_code,
                         status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_contact_form(self):
        """Test for creating new contact form."""
        visitor = Visitor.objects.create()
        payload = {
            'name': 'Test Name',
            'email': 'tst@example.com',
            'message': 'Testing message',
            'visitor': visitor.uid
        }
        response = self.client.post(CONTACT_FORM_POST_URL, payload)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(payload['name'], response.data['name'])

    def test_retrieve_projects_success(self):
        """Test for retriving projects successfuly."""
        project = Projects.objects.create(
            title='Test title',
            description='Testing text',
        )
        skill1 = Skills.objects.create(
            name='Test Skill',
            level=5,
            description='my skill desc'
        )
        project.skills.add(skill1)

        # get list
        response = self.client.get(PROJECT_LIST_URL)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['title'], project.title)
        self.assertTrue(response.data[0]['skills'])

        # get detail
        url = project_detail_url(project.id)
        response2 = self.client.get(url)
        self.assertEqual(response2.status_code, status.HTTP_200_OK)

    def test_projects_methods_not_allowed(self):
        """Tests for return error in update, patch, post request."""
        payload = {
            'title': 'Testing Title',
            'description': 'testing text'
        }
        # post
        response = self.client.post(PROJECT_LIST_URL, payload)
        self.assertEqual(response.status_code,
                         status.HTTP_405_METHOD_NOT_ALLOWED)

        project = Projects.objects.create(
            title='My project',
            description='Testing texts'
        )
        # patch
        url = project_detail_url(project.id)
        response = self.client.patch(url, payload)
        self.assertEqual(response.status_code,
                         status.HTTP_405_METHOD_NOT_ALLOWED)
        self.assertNotEqual(project.title, payload['title'])

    def test_post_browse_history_success(self):
        """Test for creating new browser history record."""
        response = self.client.post(VISITOR_POST_URL, {'lang': 'TR-tr'})
        visitor = Visitor.objects.get(uid=response.data['uid'])

        payload = {
            'visitor': visitor.uid,
            'action': 'Test record created'
        }
        response2 = self.client.post(BROWSER_HISTORY_URL, payload)
        self.assertEqual(response2.status_code, status.HTTP_201_CREATED)

        histories = BrowseHistory.objects.filter(
            id=response2.data['id']
            ).exists()
        self.assertTrue(histories)

        payload = {
            'visitor': "",
            'action': 'New action without visitor.'
        }
        response3 = self.client.post(BROWSER_HISTORY_URL, payload)
        self.assertEqual(response3.status_code, status.HTTP_201_CREATED)
