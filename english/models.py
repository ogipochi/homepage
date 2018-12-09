from django.db import models
import uuid as uuid_lib



class Sentence(models.Model):
    uuid = models.UUIDField(db_index=True,default=uuid_lib.uuid4)
    content_eng = models.TextField(null=False,blank=False,default=None)
    content_jp = models.TextField(null=False,blank=False,default=None)
    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_public = models.BooleanField(default=True)
    ref = models.TextField("参考文献",default=None,null=True,blank=True)
    def get_vocabularies(self):
        s_to_vs = SentenceToVocabulary.objects.filter(sentence=self.id,is_active=True,is_public=True)
        vocabularies = list()
        for s_to_v in s_to_vs:
            vocabularies.append(s_to_v.vocabulary)
        return vocabularies
    def __str__(self):
        return self.content_eng
    class Meta:
        ordering=('created',)

class Vocabulary(models.Model):
    uuid = models.UUIDField(db_index=True,default=uuid_lib.uuid4)
    content_eng = models.CharField(max_length=63,null=False,blank=False,default=None)
    content_jp = models.CharField(max_length=63,null=False,blank=False,default=None)
    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_public = models.BooleanField(default=True)
    def get_repetition(self):
        sentence_to_vocabularies = SentenceToVocabulary.objects.filter(vocabulary=self.id)
        return len(sentence_to_vocabularies)
    def get_sentences(self):
        s_to_vs = SentenceToVocabulary.objects.filter(vocabulary=self.id,is_active=True,is_public=True)
        sentences = list(map(lambda sentence:s_to_v.sentence,s_to_vs))
        return sentences
    def __str__(self):
        return self.content_eng
    class Meta:
        ordering=('content_eng','content_jp')

class SentenceToVocabulary(models.Model):
    vocabulary = models.ForeignKey(Vocabulary,on_delete=models.CASCADE)
    sentence = models.ForeignKey(Sentence,on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
    is_public = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)
    class Meta:
        ordering=('created',)
    def __str__(self):
        return "{} [ {} ]".format(self.vocabulary.content_eng,self.sentence.content_eng)