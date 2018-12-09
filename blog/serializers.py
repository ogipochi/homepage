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
    main_image = serializers.URLField(source="get_main_image")
    class Meta:
        model = Blog
        fields = (
            'uuid',
            'title',
            'created',
            'edited',
            'is_active',
            'is_public',
            'tags',
            'main_image',
        )
class ParagraphSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paragraph
        fields = (
            'uuid',
            'image',
            'content',
            'order',
            'is_code',
            'programing_language',
            'image',
        )

class SectionSerializer(serializers.ModelSerializer):
    paragraphs = ParagraphSerializer(source="get_paragraph_list",many=True)
    class Meta:
        model = Section
        fields = (
            'uuid',
            'title',
            'order',
            'paragraphs',
        )

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields =(
            'uuid',
            'blog',
            'name',
            'message',
            'to_comment',
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
            'to_comment',
            'reply_list',
            'created',
            'edited',
        )
class BlogSerializer(serializers.ModelSerializer):
    sections = SectionSerializer(source="get_section_list",many=True)
    comments = CommentSerializer(source="get_comment_list",many=True)
    class Meta:
        model = Blog
        fields = (
            'uuid',
            'title',
            'created',
            'edited',
            'is_active',
            'is_public',
            'sections',
            'comments',
        )


