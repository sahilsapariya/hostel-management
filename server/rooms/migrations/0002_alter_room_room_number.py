# Generated by Django 5.0 on 2023-12-21 11:54

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("rooms", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="room",
            name="room_number",
            field=models.IntegerField(unique=True),
        ),
    ]
