from django.urls import path
from . import views

urlpatterns = [
    path('', views.paginaPrincipal, name='paginaPrincipal'),
    path('inscritos', views.paginaIncritos, name='paginaIncritos'),
    path('aboutus',views.paginaAboutUs, name='paginaAboutUs'),
    path('inscricao', views.paginaInscricao, name='paginaInscricao')

]
