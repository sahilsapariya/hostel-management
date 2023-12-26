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


class Salary(models.Model):
    # Define your salary fields
    # For example:
    worker_type = models.CharField(max_length=50)
    amount = models.FloatField()

    def __str__(self):
        return f"{self.worker_type} - {self.amount}"

class Payment(models.Model):
    profile = models.ForeignKey(Students, on_delete=models.CASCADE, null=True, blank=True)
    cleaner = models.ForeignKey(Cleaners, on_delete=models.CASCADE, null=True, blank=True)
    cook = models.ForeignKey(Cooks, on_delete=models.CASCADE, null=True, blank=True)
    guard = models.ForeignKey(Guards, on_delete=models.CASCADE, null=True, blank=True)
    bill = models.ForeignKey(Bill, on_delete=models.CASCADE, null=True, blank=True)
    salary = models.ForeignKey(Salary, on_delete=models.CASCADE, null=True, blank=True)
    date = models.DateField()
    amount_paid = models.FloatField()
    notes = models.TextField(blank=True)
    category = models.CharField(max_length=50, choices=[("tuition", "Tuition Fees"), ("accommodation", "Accommodation Fees"), ("salary", "Worker Salary"), ("utility", "Utility Bill")])
    hours_worked = models.IntegerField(null=True, blank=True)
    overtime_hours = models.IntegerField(null=True, blank=True)
    allowances = models.FloatField(null=True, blank=True)

    def __str__(self):
        return f"Payment for {self.profile or self.cleaner or self.cook or self.guard} - {self.amount_paid}"
