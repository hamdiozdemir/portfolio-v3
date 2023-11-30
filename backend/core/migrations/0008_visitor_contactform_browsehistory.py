# Generated by Django 4.2.6 on 2023-11-17 12:54

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_image_text'),
    ]

    operations = [
        migrations.CreateModel(
            name='Visitor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.UUIDField(auto_created=True, default=uuid.uuid4)),
            ],
        ),
        migrations.CreateModel(
            name='ContactForm',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
                ('message', models.TextField()),
                ('visitor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.visitor')),
            ],
        ),
        migrations.CreateModel(
            name='BrowseHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('action', models.CharField(max_length=255)),
                ('visitor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.visitor')),
            ],
        ),
    ]