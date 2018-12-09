from django.db import models
import uuid as uuid_lib


class Message(models.Model):
    """
    メッセージを管理するクラス
    """
    uuid = models.UUIDField(db_index=True,default=uuid_lib.uuid4)
    name = models.CharField(max_length=255,default="名無しさん")
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    email = models.EmailField("メールアドレス")
    def __str__(self):
        name_str = "{}[{}]".format(self.name,self.created)
        return name_str

    