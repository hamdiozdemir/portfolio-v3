# Generated by Django 4.2.6 on 2023-11-17 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_visitor_contactform_browsehistory'),
    ]

    operations = [
        migrations.AddField(
            model_name='visitor',
            name='lang',
            field=models.CharField(default='ERROR', max_length=10),
        ),
    ]