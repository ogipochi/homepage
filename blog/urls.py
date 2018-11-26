from django.urls import path,re_path
from . import views

urlpatterns=[
 re_path(r'^blog_list$',views.BlogListAPIView.as_view(),name="blog_list")   
]