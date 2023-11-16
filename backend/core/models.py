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


class Projects(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    github = models.CharField(max_length=255, blank=True, null=True)
    link = models.CharField(max_length=255, blank=True, null=True)
    skills = models.ManyToManyField(Skills, blank=True)

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
