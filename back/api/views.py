from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from django.contrib.auth.views import LogoutView, LoginView
from django.contrib.auth.hashers import make_password

from django.views.generic import CreateView
from rest_framework import viewsets, mixins
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer

from .serializers import *
from .models import *

class CommentCreate(generics.CreateAPIView):
    serializer_class = CommentSerializer

class CommentList(generics.ListAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()


class Logout(LogoutView):
    next_page = '/api/get_all'

class Login(LoginView):
    context_object_name = 'form'
    template_name = 'login.html'

    def get_redirect_url(self):
        return '/api/get_all'

class CurrentUser(APIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


class UserViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def perform_create(self, serializer):
        print(serializer.validated_data['password'])
        user = User.objects.create_user(**serializer.validated_data)
        user.set_password(serializer.validated_data['password'])
        return user
        