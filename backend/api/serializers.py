from django.conf import settings
from django.db.models import fields
from rest_framework import serializers


class UserSerializer(serializers.Serializer):
    models = settings.AUTH_USER_MODEL
    fields = ["*"]
