# Generated by Django 2.2.4 on 2019-08-12 15:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0005_profile_country'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='country',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='latidute',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='longitude',
        ),
    ]
