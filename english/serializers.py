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
    sentences = SentenceForVocabularySerializer(source="get_sentences",many=True)
    class Meta:
        model = Vocabulary
        fields = (
            'content',
            'created',
            'edited',
            'repetition',
            'sentences',
        )

class VocabularyForSentenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vocabulary
        fields = (
            'uuid',
            'content',
            'repetition',
        )

class SentenceListSerializer(serializers.ModelSerializer):
    vocabularies = VocabularyForSentenceSerializer(source="get_vocabularies",many=True)
    class Meta:
        model = Sentence
        fields = (
            'uuid',
            'content',
            'created',
            'edited',
            'created',
            'ref',
            'vocabularies',
        )