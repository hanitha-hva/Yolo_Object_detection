from django.shortcuts import render,HttpResponse
from django.http import JsonResponse

# Create your views here.
def home(req):

    apikey='dknk339fbbb'
    key=req.headers.get('x-api-key')
    
    if key==apikey:
        return HttpResponse('hello from hanitha')
    else:
        return HttpResponse(status=500)
        