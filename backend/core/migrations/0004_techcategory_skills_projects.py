# Generated by Django 4.2.6 on 2023-11-14 20:39

import core.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_profile_about'),
    ]

    operations = [
        migrations.CreateModel(
            name='TechCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Skills',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('image', models.ImageField(null=True, upload_to=core.models.skill_image_file_path)),
                ('level', models.IntegerField()),
                ('description', models.TextField(blank=True)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.techcategory')),
            ],
        ),
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255)),
                ('github', models.CharField(blank=True, max_length=255, null=True)),
                ('link', models.CharField(blank=True, max_length=255, null=True)),
                ('skills', models.ManyToManyField(to='core.skills')),
            ],
        ),
    ]
