from django.db import models
import uuid as uuid_lib

class Tag(models.Model):
    """
    タグを管理するクラス
    """
    uuid = models.UUIDField(db_index=True,default=uuid_lib.uuid4)
    name = models.CharField('カテゴリ名',max_length=63)
    description = models.TextField('説明')
    class Meta:
        ordering=('name',)
class Blog(models.Model):
    """
    ブログを管理するコンテナ用クラス
    """
    uuid = models.UUIDField(db_index=True,default=uuid_lib.uuid4)
    title = models.CharField(max_length=63,null=False,blank=False,default=None)
    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_public = models.BooleanField(default=True)
    def get_tag_list(self):
        tag_accompany_with_blogs = TagAccompanyWithBlog.objects.filter(blog=self.id)
        tag_list = []
        for tag_accompany_with_blog in tag_accompany_with_blogs:
            tag_list.append(tag_accompany_with_blog.tag)
        return tag_list
    def get_paragraph_list(self):
        paragraph_list = Paragraph.objects.filter(blog=self.id,is_active=True,is_public=True)
        return paragraph_list
    def get_comment_list(self):
        comment_list = Comment.objects.filter(blog=self.id,is_active=True,is_public=True)
        return comment_list
    

class Paragraph(models.Model):
    """
    ブログの本文用のクラス
    """
    uuid = models.UUIDField(db_index=True,default=uuid_lib.uuid4)
    blog = models.ForeignKey(Blog,on_delete=models.CASCADE)
    image = models.ImageField(default=None,null=True,blank=True)
    content = models.TextField(null=False,blank=False,default=None)
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    is_public = models.BooleanField(default=True)
    class Meta:
        ordering=('order',)
        unique_together=('blog','order',)
    
class Comment(models.Model):
    uuid = models.UUIDField(db_index=True,default=uuid_lib.uuid4)
    blog=models.ForeignKey(Blog,on_delete=None,default=None)
    name = models.CharField(max_length=63,default="匿名希望")
    message = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_public = models.BooleanField(default=True)
    is_reply = models.BooleanField(default=False)
    to_comment = models.UUIDField(default=None,null=True,blank=True)
    class Meta:
        ordering = ('created',)
    def get_reply_comment_list(self):
        """
        このコメントに対してのすべての
        Commentオブジェクトを返す
        """
        reply_comment_list = Comment.objects.filter(
            to_commet=self.uuid
        )
        return reply_comment_list
class TagAccompanyWithBlog(models.Model):
    tag = models.ForeignKey(Tag,on_delete=models.CASCADE)
    blog = models.ForeignKey(Blog,on_delete=models.CASCADE)
    class Meta:
        unique_together=('tag','blog',)
