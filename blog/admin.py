from django.contrib import admin
from .models import *

admin.site.register(Tag)
admin.site.register(Blog)
admin.site.register(Paragraph)
admin.site.register(Comment)
admin.site.register(TagAccompanyWithBlog)
admin.site.register(Section)
