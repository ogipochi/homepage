from rest_framework import serializers
from .models import *

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = (
            'uuid',
            'name',
        )

class BlogListSerializer(serializers.ModelSerializer):
    tags = TagSerializer(source='get_tag_list',many=True)
    class Meta:
        model = Blog
        fields = (
            'uuid',
            'titile',
            'created',
            'edited',
            'is_active',
            'is_public',
            'image',
            'tags',
        )
class ParagraphSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paragraph
        fields = (
            'uuid',
            'blog',
            'image',
            'content',
            'order',
        )

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields =(
            'uuid',
            'blog',
            'name',
            'message',
            'to_commet',
        )

class CommentSerializer(serializers.ModelSerializer):
    reply_list = ReplySerializer(source="get_reply_comment_list",many=True)
    class Meta:
        model = Comment
        fields =(
            'uuid',
            'blog',
            'name',
            'message',
            'to_commet',
            'reply_list'
        )
class BlogSerializer(serializers.ModelSerializer):
    paragraphs = ParagraphSerializer(source="get_paragraph_list",many=True)
    comments = CommentSerializer(source="get_comment_list",many=True)
    class Meta:
        model = Blog
        fields = (
            'uuid',
            'titile',
            'created',
            'edited',
            'is_active',
            'is_public',
            'image',
            'tags',
        )


