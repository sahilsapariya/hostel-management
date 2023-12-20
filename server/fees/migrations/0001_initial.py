# Generated by Django 5.0 on 2023-12-20 14:35

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("profiles", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="FeeStructure",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("fee_type", models.CharField(max_length=50)),
                ("amount", models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name="Fees",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("date", models.DateField()),
                ("amount_paid", models.FloatField()),
                (
                    "payment_method",
                    models.CharField(
                        choices=[
                            ("cash", "Cash"),
                            ("credit_card", "Credit Card"),
                            ("online_transfer", "Online Transfer"),
                        ],
                        max_length=20,
                    ),
                ),
                (
                    "payment_status",
                    models.CharField(
                        choices=[
                            ("pending", "Pending"),
                            ("completed", "Completed"),
                            ("overdue", "Overdue"),
                        ],
                        max_length=20,
                    ),
                ),
                (
                    "student",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="profiles.students",
                    ),
                ),
                (
                    "fee_structure",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="fees.feestructure",
                    ),
                ),
            ],
        ),
    ]
