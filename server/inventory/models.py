from django.db import models
from django.utils import timezone

class Inventory(models.Model):
    # CLEANING = 'cleaning'
    # KITCHEN = 'kitchen'
    # SPORTS = 'sports'
    # BEDDING = 'bedding'

    item_name = models.CharField(max_length=100)
    category = models.CharField(max_length=20)
    quantity = models.IntegerField()
    unit = models.CharField(max_length=20)
    purchase_price = models.FloatField()
    purchase_date = models.DateField(default=timezone.now())
    vendor_name = models.CharField(max_length=100)
    vendor_phone_number = models.CharField(max_length=15)
    minimum_stock = models.IntegerField()
    status = models.CharField(max_length=50)
    notes = models.TextField(blank=True)
