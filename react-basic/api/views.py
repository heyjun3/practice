from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from rest_framework import viewsets
from django.contrib.auth.models import User

from api.models import Task 
from api.serializers import UserSerializer
from api.serializers import TaskSerializer
from api.ownpermissions import ProfilePermission


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (ProfilePermission, )


class ManageUserView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

    def get_object(self):
        return self.request.user

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )
