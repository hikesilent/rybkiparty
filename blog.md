---
layout: default
title: Blog
---

<h1>Wszystkie wpisy</h1>

{% for post in site.posts %}
<article class="post">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <small>{{ post.date | date: "%d.%m.%Y" }}</small>
    {{ post.excerpt }}
    <a href="{{ post.url }}" class="btn">Czytaj więcej</a>
</article>
<hr>
{% endfor %}