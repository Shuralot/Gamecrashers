from django.shortcuts import render


def paginaPrincipal(request):
    return render(request, 'pages/pagina_principal.html')


def paginaIncritos(request):
    return render(request, 'pages/pagina_inscritos.html')


def paginaAboutUs(request):
    return render(request, 'pages/pagina_de_sobre_nos.html')


def paginaInscricao(request):
    return render(request, 'pages/pagina_de_inscricao.html')