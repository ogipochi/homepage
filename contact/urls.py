from django.urls import path,re_path
from . import views


urlpatterns = [
    path('create',views.MessageCreateAPIView.as_view(),name="create"),
]