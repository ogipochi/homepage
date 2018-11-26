from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'uuid',
            'name',
            'description'
        )

class NewsSerializer(serializers.ModelSerializer):
    category = CategorySerializer(source="get_category",many=True)
    class Meta:
        model = News
        fields = (
            'uuid',
            'category',
            'link_text',
            'link_url',
            'created',
            'edited',
        )
