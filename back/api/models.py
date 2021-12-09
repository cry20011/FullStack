from django.db import models

class Comment(models.Model):
    login = models.CharField(verbose_name='Логин', max_length=36)
    text = models.TextField(verbose_name='Текст')

    def __str__(self):
        return self.login + ': ' + self.text

