# models.py in payment app
from django.db import models
from profiles.models import *
from datetime import timedelta
from django.utils import timezone


def default_due_date():
    return timezone.now() + timedelta(days=10)

class Bill(models.Model):
    ELECTRICITY = 'electricity'
    WATER = 'water'
    GROCERIES = 'groceries'
    OTHER = 'other'

    BILL_TYPE_CHOICES = [
        (ELECTRICITY, 'Electricity'),
        (WATER, 'Water'),
        (GROCERIES, 'groceries'),
        (OTHER, 'Other'),
    ]

    PAID = 'paid'
    PENDING = 'pending'

    PAYMENT_STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (PAID, 'Paid')
    ]

    bill_type = models.CharField(max_length=50, choices=BILL_TYPE_CHOICES, blank=False)
    amount = models.FloatField(blank=False)
    bill_date = models.DateField(default=timezone.now(), blank=False)
    due_date = models.DateField(default=default_due_date, blank=False)
    payment_status = models.CharField(max_length=20, choices=PAYMENT_STATUS_CHOICES, default=PENDING)
    items = models.JSONField(default=list, blank=True)

    def __str__(self):
        return f"{self.bill_type} - {self.amount}"

