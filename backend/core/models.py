"""
Models for APIs.
"""

from django.db import models
import os
import uuid


def skill_image_file_path(instance, filename):
    """Generate file path for new recipe image."""
    ext = os.path.splitext(filename)[1]
    filename = f"{uuid.uuid4()}{ext}"

    return os.path.join('uploads', 'skill', filename)


class Contact(models.Model):
    website = models.CharField(max_length=255, null=True, blank=True)
    linkedin = models.CharField(max_length=255, null=True, blank=True)
    github = models.CharField(max_length=255, null=True, blank=True)
    email = models.CharField(max_length=255, null=True, blank=True)
    phone = models.IntegerField(null=True, blank=True)


class TechCategory(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Skills(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(null=True, upload_to=skill_image_file_path)
    level = models.IntegerField()
    description = models.TextField(blank=True)
    category = models.ForeignKey(TechCategory,
                                 on_delete=models.SET_NULL,
                                 null=True)

    def __str__(self):
        return self.name


class Image(models.Model):
    image = models.ImageField(null=True, upload_to=skill_image_file_path)
    text = models.CharField(max_length=100, default='Image')

    def __str__(self):
        return self.text


class Projects(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    github = models.CharField(max_length=255, blank=True, null=True)
    link = models.CharField(max_length=255, blank=True, null=True)
    skills = models.ManyToManyField(Skills, blank=True)
    images = models.ManyToManyField(Image, blank=True)

    def __str__(self):
        return self.title


class Profile(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    description = models.TextField()
    about = models.TextField(default=" ")
    contacts = models.ManyToManyField(Contact)
    is_latest = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Visitor(models.Model):
    """Model for saving ananymous visitors."""
    uid = models.UUIDField(default=uuid.uuid4, auto_created=True)
    lang = models.CharField(max_length=10, default='ERROR')
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.id}: {self.lang}"


class ContactForm(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    visitor = models.ForeignKey(Visitor,
                                null=True,
                                blank=True,
                                on_delete=models.SET_NULL)


class BrowseHistory(models.Model):
    """Model for recording the visitors browse history on page."""
    visitor = models.ForeignKey(Visitor,
                                null=True,
                                blank=True,
                                on_delete=models.SET_NULL)
    timestamp = models.DateTimeField(auto_now_add=True)
    action = models.CharField(max_length=255)
    type = models.CharField(max_length=50, default='button')
