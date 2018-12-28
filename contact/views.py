from rest_framework.response import Response
from rest_framework import status,pagination
from rest_framework.generics import CreateAPIView
from .serializers import *
from .models import *



class MessageCreateAPIView(CreateAPIView):
    serializer_class = MessageSerializer
    queryset = Message.objects.all()
    