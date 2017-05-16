from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=50, blank=True)
    national_id = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        db_table = 'tbl_profiles'


    def remove(self):
        self.remove_date = timezone.now()
        self.save()

    def __str__(self):
        return self.acc_name
