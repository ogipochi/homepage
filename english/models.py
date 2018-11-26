from django.db import models
import uuid as uuid_lib



class Sentence(models.Model):
    uuid = models.UUIDField(db_index=True,default=uuid_lib.uuid4)
    content = models.TextField(null=False,blank=False,default=None)
    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_public = models.BooleanField(default=True)
    ref = models.TextField("参考文献")
    def get_vocabularies(self):
        s_to_vs = SentenceToVocabulary.objects.filter(sentence=self.id,is_active=True,is_public=True)
        vocabularies = list(map(lambda vocaburaly:s_to_v.sentence,s_to_vs))
        return vocabularies
    
    class Meta:
        ordering=('created',)

class Vocabulary(models.Model):
    uuid = models.UUIDField(db_index=True,default=uuid_lib.uuid4)
    content = models.CharField(max_length=63,null=False,blank=False,default=None)
    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)
    repetition = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    is_public = models.BooleanField(default=True)
    def get_sentences(self):
        s_to_vs = SentenceToVocabulary.objects.filter(vocabulary=self.id,is_active=True,is_public=True)
        sentences = list(map(lambda sentence:s_to_v.sentence,s_to_vs))
        return sentences
    class Meta:
        ordering=('content',)

class SentenceToVocabulary(models.Model):
    vocabulary = models.ForeignKey(Vocabulary,on_delete=models.CASCADE)
    sentence = models.ForeignKey(Sentence,on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
    is_public = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)
    class Meta:
        ordering=('created',)