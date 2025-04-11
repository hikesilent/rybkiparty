---
layout: default
title: Rybki Party - Kanał dla prawdziwych wędkarzy
---

<div class="content-box">
    <h2>O nas</h2>
    <p>Jesteśmy pasjonatami wędkarstwa, którzy dzielą się swoją miłością do tego sportu. Nasze filmy to mieszanka profesjonalnych porad, niesamowitych przygód i relaksujących chwil nad wodą.</p>
    <p>Dołącz do naszej społeczności i razem odkrywajmy tajniki wędkarstwa!</p>
</div>

<div class="content-box">
    <h2>Ostatnie wpisy</h2>
    
    <ul class="post-list">
        {% for post in site.posts limit:3 %}
        <li class="post-item">
            <a href="{{ post.url }}" class="post-title">{{ post.title }}</a>
            <small class="post-date">{{ post.date | date: "%d.%m.%Y" }}</small>
            <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
        </li>
        {% endfor %}
    </ul>
    
    <a href="/blog" class="btn">Zobacz wszystkie posty</a>
</div>

{% include social.html %}