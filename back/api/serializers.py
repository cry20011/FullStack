from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
	class Meta:
		model = Comment
		fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'username', 'password']
    extra_kwargs = {
      'password': {'write_only': True}
    }
    