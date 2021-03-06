# Generated by Django 2.1.3 on 2018-11-26 13:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('english', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='sentencetovocabulary',
            options={'ordering': ('created',)},
        ),
        migrations.RenameField(
            model_name='vocabulary',
            old_name='is_created',
            new_name='created',
        ),
        migrations.RenameField(
            model_name='vocabulary',
            old_name='is_edited',
            new_name='edited',
        ),
        migrations.AddField(
            model_name='vocabulary',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='vocabulary',
            name='is_public',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='sentence',
            name='ref',
            field=models.TextField(verbose_name='参考文献'),
        ),
    ]
