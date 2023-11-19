from django.dispatch import receiver
from django.db.models.signals import post_save
from .models import ContactForm

from django.core.mail import EmailMessage
from django.conf import settings # noqa


@receiver(post_save, sender=ContactForm)
def new_message(sender, instance, created, **kwargs):
    print("signal 1")
    if created:
        print("Signal created")
        html_content = email_html_body(instance)
        mail = EmailMessage(
            "New Contact Form Message",
            html_content,
            'settings.EMAIL_HOST_USER',
            ['hamdiozdemir61@gmail.com']
        )
        mail.content_subtype = 'html'
        mail.send(fail_silently=False)


def email_html_body(instance: ContactForm):
    # Template for Email html content.
    return f"""
            <p>New Contact Form Message <i>received!</i></p>
            <p><b>Time: </b> {instance.timestamp}</p>
            <p><b>Sender: </b> {instance.name} - {instance.visitor} </p>
            <p><b>Email: </b> {instance.email}</p>
            <p><b>Message: </b></p>
            <p> <i> {instance.message} </i> </p>
            """
