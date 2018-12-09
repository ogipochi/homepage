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
    def __str__(self):
        return self.name
class Blog(models.Model):
    """
    ブログを管理するコンテナ用クラス
    """
    uuid = models.UUIDField(db_index=True,default=uuid_lib.uuid4)
    title = models.CharField(max_length=63,null=False,blank=False,default=None)
    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)
    image = models.ImageField(default=None,null=True,blank=True)
    is_active = models.BooleanField(default=True)
    is_public = models.BooleanField(default=True)
    def get_tag_list(self):
        tag_accompany_with_blogs = TagAccompanyWithBlog.objects.filter(blog=self.id)
        tag_list = []
        for tag_accompany_with_blog in tag_accompany_with_blogs:
            tag_list.append(tag_accompany_with_blog.tag)
        return tag_list
    def get_section_list(self):
        section_list = Section.objects.filter(blog=self.id,is_active=True,is_public=True)
        return section_list
    def get_comment_list(self):
        comment_list = Comment.objects.filter(blog=self.id,is_active=True,is_public=True,is_reply=False)
        return comment_list
    def get_main_image(self):
        try:
            return self.image.url
        except:
            return "/media/no_image.jpg"
            
            
    def __str__(self):
        return self.title
    class Meta:
        ordering=('-created',)
    
class Section(models.Model):
    uuid = models.UUIDField(db_index=True,default=uuid_lib.uuid4)
    title = models.CharField(max_length=255,default="")
    blog = models.ForeignKey(Blog,on_delete=models.CASCADE,default=None,null=False,blank=False,)
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    is_public = models.BooleanField(default=True)
    class Meta:
        ordering=('order',)
        unique_together=('blog','order',)
    def get_paragraph_list(self):
        paragraph_list = Paragraph.objects.filter(is_active=True,is_public=True,section=self.id)
        return paragraph_list
    def __str__(self):
        return "{}[{}]".format(self.blog.title,self.order)


class Paragraph(models.Model):
    """
    ブログの本文用のクラス
    """
    uuid = models.UUIDField(db_index=True,default=uuid_lib.uuid4)
    section = models.ForeignKey(Section,default=None,null=False,blank=False,on_delete=models.CASCADE)
    image = models.ImageField(default=None,null=True,blank=True)
    content = models.TextField(null=False,blank=False,default=None)
    programing_language = models.CharField(max_length=127,default=None,null=True,blank=True)
    order = models.IntegerField(default=0)
    is_code = models.BooleanField(default=False)  #コードならTrue
    is_active = models.BooleanField(default=True)
    is_public = models.BooleanField(default=True)
    class Meta:
        ordering=('order',)
        unique_together=('section','order',)
    def __str__(self):
        return "{}[{}]".format(self.section.title,self.order)


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
            to_comment=self.uuid
        )
        return reply_comment_list
    def __str__(self):
        return "{}[{}]".format(self.blog.title,self.name)
class TagAccompanyWithBlog(models.Model):
    tag = models.ForeignKey(Tag,on_delete=models.CASCADE)
    blog = models.ForeignKey(Blog,on_delete=models.CASCADE)
    class Meta:
        unique_together=('tag','blog',)
    def __str__(self):
        return "{}:{}".format(self.blog.title,self.tag.name)
