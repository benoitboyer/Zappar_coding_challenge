from django.urls import path
from .api import views

urlpatterns = [
    path("api/profile/", views.ProfileRetrieve.as_view()),
    path("api/import-profile/", views.ProfileImportData.as_view()),
]
