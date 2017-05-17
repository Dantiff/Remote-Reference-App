"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls import url, include
from django.contrib import admin
from django.conf.urls.static import static
from core.views import *

ngurls = [
    url(r'^$', NgView.as_view(), name='ngViews'),
    url(r'^template/$', NgTemplateView.as_view(), name='ngTemplate'),
    url(r'^home/$', NgHomeView.as_view(), name='ngHome'),
    url(r'^login/$', NgLoginView.as_view(), name='ngLogin'),
    url(r'^register/$', NgRegisterView.as_view(), name='ngRegister'),
    url(r'^customers/$', NgCustomersView.as_view(), name='ngCustomers'),
    url(r'^downloads/$', NgDownloadsView.as_view(), name='ngDownloads'),
]

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^api/users/register/$', UserCreate.as_view(), name='user-create'),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^ngViews/', include(ngurls)),
    url(r'^(?!ng/).*$', AngularApp.as_view(), name="angular_app"),
    url(r'^', include('core.urls')),
] + static(settings.ANGULAR_URL, document_root=settings.ANGULAR_ROOT)
