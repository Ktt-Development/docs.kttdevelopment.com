$("#markdown").ready(function(){
    console.log("readY");
    $("#markdown").find("a").filter(function() {
        return this.hostname != window.location.hostname;
    }).attr('target', '_blank');
});