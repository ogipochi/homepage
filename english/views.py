from rest_framework.response import Response
from rest_framework import status,pagination
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from .serializers import *
from .models import *
import time
from rest_framework.generics import ListAPIView


class VocabularySetPagination(pagination.PageNumberPagination):
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

class SentenceSetPagination(pagination.PageNumberPagination):
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
    
class VocaburaryListAPIView(ListAPIView):
    queryset = Vocabulary.objects.filter(is_active=True,is_public=True)
    serializer_class = VocabularyListSerializer
    pagination_class = VocabularySetPagination

class SentenceListAPIView(ListAPIView):
    queryset = Sentence.objects.filter(is_active=True,is_public=True)
    serializer_class = SentenceListSerializer
    pagination_class = SentenceSetPagination




