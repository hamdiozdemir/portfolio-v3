# Generated by Django 4.2.6 on 2023-10-31 12:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('website', models.CharField(max_length=255)),
                ('linkedin', models.CharField(max_length=255)),
                ('github', models.CharField(max_length=255)),
                ('phone', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('description', models.TextField()),
                ('contacts', models.ManyToManyField(to='core.contact')),
            ],
        ),
    ]
