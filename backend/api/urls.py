from django.urls import path
from .views import signup
from rest_framework.authtoken.views import obtain_auth_token



urlpatterns = [
    path("get_token/",  obtain_auth_token, name="get_token"),
    path("signup/", signup, name="signup")
]



