from django.urls import path,re_path
from . import views

urlpatterns=[
 re_path(r'^blog_list$',views.BlogListAPIView.as_view(),name="blog_list"),
 re_path(r'^blog_detail/(?P<uuid>[0-9a-f-]+)$',views.BlogDetailAPIView.as_view(),name="blog_detail"),
]