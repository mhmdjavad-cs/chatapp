from django.urls import path
from .views import hello, login
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path("", hello, name=""),
    path("test/", login, name=""),
    path("get_token/",  obtain_auth_token, name="get_token"),
]



