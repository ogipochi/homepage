"""homepage URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include,re_path
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('',TemplateView.as_view(template_name="index.html")),
    path('profile',TemplateView.as_view(template_name="index.html")),
    path('blog',TemplateView.as_view(template_name="index.html")),
    path('english',TemplateView.as_view(template_name="index.html")),
    re_path(r'^blog/detail/(?P<uuid>[0-9a-f-]+)$',TemplateView.as_view(template_name="index.html")),
    path('admin/', admin.site.urls),
    path('api/blog/',include('blog.urls')),
    path('api/english/',include('english.urls')),
    path('api/contact/',include('contact.urls')),
]
urlpatterns+= static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns+= static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
