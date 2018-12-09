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

class BlogSetPagination(pagination.PageNumberPagination):
    page_size = 21
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

class BlogListAPIView(ListAPIView):
    queryset = Blog.objects.filter(is_active=True)
    serializer_class = BlogListSerializer
    pagination_class = BlogSetPagination

class BlogDetailAPIView(APIView):
    def get(self,request,*args,**kwargs):
        uuid = kwargs["uuid"]
        blog = Blog.objects.get(uuid=uuid)
        serializer = BlogSerializer(blog)
        response_data = {
            "data":serializer.data
        }
        return Response(response_data,status=status.HTTP_200_OK)