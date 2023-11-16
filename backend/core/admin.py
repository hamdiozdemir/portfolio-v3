from django.contrib import admin

from .models import (
    Profile,
    Contact,
    TechCategory,
    Projects,
    Skills
)

admin.site.register(Profile)
admin.site.register(Contact)
admin.site.register(TechCategory)
admin.site.register(Projects)
admin.site.register(Skills)
