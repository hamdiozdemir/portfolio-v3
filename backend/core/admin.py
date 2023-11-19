from django.contrib import admin

from .models import (
    Profile,
    Contact,
    TechCategory,
    Projects,
    Skills,
    Image,
    Visitor,
    BrowseHistory,
    ContactForm
)

admin.site.register(Profile)
admin.site.register(Contact)
admin.site.register(TechCategory)
admin.site.register(Projects)
admin.site.register(Skills)
admin.site.register(Image)
admin.site.register(Visitor)
admin.site.register(BrowseHistory)
admin.site.register(ContactForm)
