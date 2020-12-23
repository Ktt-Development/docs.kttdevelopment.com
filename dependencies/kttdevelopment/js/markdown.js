$("#markdown").ready(function(){
    $("#markdown").find("a").filter(function() {
        return this.hostname != window.location.hostname;
    }).attr('target', '_blank');
});

$("#body").ready(function(){
    $("#body").find("a").filter(function() {
        return this.hostname != window.location.hostname;
    }).attr('target', '_blank');
});