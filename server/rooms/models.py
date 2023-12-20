from django.db import models

# Create your models here.


class Room(models.Model):
    room_number = models.IntegerField()
    capacity = models.IntegerField()
    rent = models.IntegerField()
    facilities = models.JSONField(default=list)
    number_of_study_tables = models.IntegerField()

    def __str__(self):
        return str(self.room_number)