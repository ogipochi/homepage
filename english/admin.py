from django.contrib import admin
from .models import *


admin.site.register(Sentence)
admin.site.register(Vocabulary)
admin.site.register(SentenceToVocabulary)