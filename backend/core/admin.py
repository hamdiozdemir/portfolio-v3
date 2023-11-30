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


class VisitorAdmin(admin.ModelAdmin):
    list_display = ["id", "uid", "lang", "timestamp"]


class ContactFormAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "email", "visitor", "timestamp"]


class BrowseHistoryAdmin(admin.ModelAdmin):
    list_display = ["id", "visitor", "action", "timestamp"]


admin.site.register(Profile)
admin.site.register(Contact)
admin.site.register(TechCategory)
admin.site.register(Projects)
admin.site.register(Skills)
admin.site.register(Image)
admin.site.register(Visitor, VisitorAdmin)
admin.site.register(BrowseHistory, BrowseHistoryAdmin)
admin.site.register(ContactForm, ContactFormAdmin)
