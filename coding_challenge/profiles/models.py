from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    picture = models.URLField()
    country = models.CharField(max_length=80)

    def __str__(self):
        return self.name
