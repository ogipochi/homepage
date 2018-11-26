from django.urls import path,re_path
from . import views

urlpatterns = [
    re_path(r'^vocabulary_list$',views.VocaburaryListAPIView.as_view(),name="vocabulary_list"),
    re_path(r'^sentence_list$',views.SentenceListAPIView.as_view(),name="sentence_list"),
]