from django.urls import path,re_path
from . import views

urlpatterns=[
    re_path(r'^news_list$',views.NewsListAPIView.as_view(),name="news_list"),
]