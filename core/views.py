from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import View, TemplateView
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from core.serializers import *
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from core.models import *

# Create your views here.

class AngularApp(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(AngularApp, self).get_context_data(**kwargs)
        context['ANGULAR_URL'] = settings.ANGULAR_URL
        return context


class NgView(View):
	"""View to render django template to angular"""
	def get(self, request):
		return HttpResponse("OK!")


class NgTemplateView(View):
	"""To render template view"""
	def get(self, request):
		return render(request, 'template.html', {"user": request.user})

class NgHomeView(View):
	"""To render home view"""
	def get(self, request):
		return render(request, 'home.html', {"user": request.user})


class NgLoginView(View):
	"""To render login view"""
	def get(self, request):
		return render(request, 'login.html', {"user": request.user})


class NgRegisterView(View):
	"""To render register view"""
	def get(self, request):
		return render(request, 'register.html', {"user": request.user})


class NgCustomersView(View):
	"""To render customers view"""
	def get(self, request):
		return render(request, 'customers.html', {"user": request.user})

class UserCreate(APIView):
    """
    Creates the user.
    """
    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        prof_serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid() and prof_serializer.is_valid():
            user = serializer.save()
            if user:
                profile = Profile(
                    user=user,
                    phone=request.data.get("phone"),
                    national_id=request.data.get("national_id")
                    )
                profile.save()
                if profile:
                    token = Token.objects.create(user=user)
                    json = serializer.data
                    json['token'] = token.key
                    json['profile'] = prof_serializer.data

                    return Response(json, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


