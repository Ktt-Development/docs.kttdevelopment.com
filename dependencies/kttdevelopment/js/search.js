---
layout: compress
---
{% capture newline %}
{% endcapture %}
window.pages = {
    {% for page in site.pages %}
        {% assign head = page.path | split: '/' %}
        {% if head[0] != "dependencies" and head[0] != "404.html" and head[0] != "index.html" %}
            "{{ page.url | slugify | remove: '-html' }}": {
                "title": "{{ page.title | xml_escape | remove: '-html' }}",
                "content": {{ page.content | markdownify | replace: newline, ' ' | strip_html | jsonify }},
                "url": "{{ site.url | append: page.url | xml_escape | remove: '.html' }}",
                "path": "{{ page.url | xml_escape | remove: '.html' }}"
            }{% unless forloop.last %},{% endunless %}
        {% endif %}
    {% endfor %}
};

var searchIndex = lunr(function() {
    this.ref("id");
    this.field("title", { boost: 10 });
    this.field("content");
    for (var key in window.pages) {
        this.add({
            "id": key,
            "title": pages[key].title,
            "content": pages[key].content
        });
    }
});

$(document).ready(function(){
    var q;

    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (var i = 0; i < vars.length; i++){
        const pair = vars[i].split("=");
        if (pair[0] === 'q')
            q = decodeURIComponent(pair[1].replace(/\+/g, "%20"));
    }

    $("#search").val(q);

    const results = searchIndex.search(q);
    const resultPages = results.map(function(m){ return pages[m.ref];});

    const regxp = new RegExp(q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'gmi');

    var resultsString = "";
    resultPages.forEach(function(r){
        var result = 
            r.content.length > 300
            ? r.content.substring(0, 300) + " ..."
            : r.content;
        resultsString += "<li class='border-bottom p-2 search-item'>";
        resultsString += "<a href='" + r.path +"'>";
        resultsString += "<div class='text-muted small text-capitalize'>" + r.path.split('/').join(" / ").replace('-', ' ') + "</div>";
        resultsString += "<h6>" + r.title.replace(regxp, function(str){return '<p class="text-primary">' + str + '</p>';}) + "</h6>";
        resultsString += "<p class='text-body'>";
        resultsString += result.replace(regxp, function(str){return '<mark>' + str + '</mark>';});
        resultsString += "</p>";
        resultsString += "</a>";
        resultsString += "</li>";
    });
    
    $("#search-results").html(resultsString);
});