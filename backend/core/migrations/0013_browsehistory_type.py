# Generated by Django 4.2.6 on 2023-12-03 17:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0012_alter_browsehistory_visitor_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='browsehistory',
            name='type',
            field=models.CharField(default='button', max_length=50),
        ),
    ]
