# Generated by Django 5.0 on 2023-12-28 13:26

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("profiles", "0004_alter_students_hostel_room_number"),
    ]

    operations = [
        migrations.AddField(
            model_name="cleaners",
            name="acc_holder_name",
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name="cleaners",
            name="acc_number",
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name="cleaners",
            name="ifsc_code",
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name="cooks",
            name="acc_holder_name",
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name="cooks",
            name="acc_number",
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name="cooks",
            name="ifsc_code",
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name="guards",
            name="acc_holder_name",
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name="guards",
            name="acc_number",
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name="guards",
            name="ifsc_code",
            field=models.CharField(blank=True, max_length=20),
        ),
    ]
