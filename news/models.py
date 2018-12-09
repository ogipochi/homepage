from django.db import models
import uuid as uuid_lib


class Category(models.Model):
    uuid = models.UUIDField(db_index=True,default=uuid_lib.uuid4)
    name = models.CharField(max_length=63,default=None,null=False,blank=False)
    description = models.TextField()
class News(models.Model):
    uuid = models.UUIDField(db_index=True,default=uuid_lib.uuid4)
    category = models.ForeignKey(Category,on_delete=models.CASCADE,default=None,null=False,blank=False)
    link_text = models.CharField(max_length=255,default=None,null=False,blank=False)
    link_url = models.URLField()
    is_active = models.BooleanField(default=True)
    is_public = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)
    def get_category(self):
        return self.category