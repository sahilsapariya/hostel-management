# models.py in fees app
from django.db import models
from profiles.models import Students

class FeeStructure(models.Model):
    # Define your fee structure fields
    # For example:
    fee_type = models.CharField(max_length=50)
    amount = models.FloatField()

    def __str__(self):
        return f"{self.fee_type} - {self.amount}"

class Fees(models.Model):
    student = models.ForeignKey(Students, on_delete=models.CASCADE)
    fee_structure = models.ForeignKey(FeeStructure, on_delete=models.CASCADE)
    date = models.DateField()
    amount_paid = models.FloatField()
    payment_method = models.CharField(max_length=20, choices=[("cash", "Cash"), ("credit_card", "Credit Card"), ("online_transfer", "Online Transfer")])
    payment_status = models.CharField(max_length=20, choices=[("pending", "Pending"), ("completed", "Completed"), ("overdue", "Overdue")])

    def __str__(self):
        return f"{self.student.name} - {self.fee_structure.fee_type} - {self.amount_paid}"
