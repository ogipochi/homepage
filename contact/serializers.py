from rest_framework import serializers
from .models import *

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = (
            'uuid',
            'name',
            'content',
            'created',
            'email'
        )
        read_only = ('uuid','created')