# models.py in payment app
from django.db import models
from profiles.models import *

class Bill(models.Model):
    # Define your bill fields
    # For example:
    bill_type = models.CharField(max_length=50)
    amount = models.FloatField()
    invoice_number = models.CharField(max_length=50, unique=True)

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
