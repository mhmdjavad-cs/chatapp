from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


@api_view(['POST'])
def signup(request):

    username = request.data['username']
    password = request.data['password']
    email = request.data['email']

    if not username or not password or not email:
        return Response({"status": "error",
            "message": "all fields should be filled!"})
    if User.objects.filter(username=username).exists():
        return Response({
            "status": "error",
            "message": "the username is already taken!",
        })
    if User.objects.filter(email=email).exists():
        return Response({
            "status": "error",
            "message": "the email is already taken!"
        })    

    user = User.objects.create_user(username=username, password=password, email=email)
    
    token, created = Token.objects.get_or_create(user=user)

    return Response({
                    "status": "success",
                    "message": "user created successfuly!",
                    "token": token.key,
                    })



