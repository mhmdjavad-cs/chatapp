from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response



@api_view(['GET'])
def login(request):
    return Response({})









def hello(request):
    return HttpResponse("hello world!!!")