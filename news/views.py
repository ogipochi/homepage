from rest_framework.response import Response
from rest_framework import status,pagination
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from .serializers import * 
from .models import *
import time
from rest_framework.exceptions import ParseError
from rest_framework.parsers import FormParser, MultiPartParser
from django.conf import settings
from datetime import datetime
import hashlib
from rest_framework.generics import ListAPIView

class NewsSetPagination(pagination.PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 10000
    def get_paginated_response(self,data):
        return Response(
            {
                'links' : {
                    'next':self.get_next_link(),
                    'previous':self.get_previous_link()
                },
                'count':self.page.paginator.count,
                'data':data
            }
        )

class NewsListAPIView(ListAPIView):
    queryset = News.objects.filter(is_active=True)
    serializer_class = NewsSerializer
    pagination_class = NewsSetPagination
