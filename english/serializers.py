from rest_framework import serializers
from .models import *


class SentenceForVocabularySerializer(serializers.ModelSerializer):
    class Meta:
        model = Sentence
        fields = (
            "uuid",
            "content",
        )

class VocabularyListSerializer(serializers.ModelSerializer):
    repetition = serializers.IntegerField(source="get_repetition")
    sentences = SentenceForVocabularySerializer(source="get_sentences",many=True)
    class Meta:
        model = Vocabulary
        fields = (
            'content_eng',
            'content_jp',
            'created',
            'edited',
            'repetition',
            'sentences',
        )

class VocabularyForSentenceSerializer(serializers.ModelSerializer):
    repetition = serializers.IntegerField(source="get_repetition")
    class Meta:
        model = Vocabulary
        fields = (
            'uuid',
            'content_eng',
            'content_jp',
            'repetition',
        )

class SentenceListSerializer(serializers.ModelSerializer):
    vocabularies = VocabularyForSentenceSerializer(source="get_vocabularies",many=True)
    class Meta:
        model = Sentence
        fields = (
            'uuid',
            'content_eng',
            'content_jp',
            'created',
            'edited',
            'created',
            'ref',
            'vocabularies',
        )