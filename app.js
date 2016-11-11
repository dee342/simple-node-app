
$(document).ready(function(){
    $("#sub").click(function(){
        $("#res").html("");
        $.get("http://localhost:1337/send?value="+$("#databox").val(), function(data, status){
            $("#res").html(data);
        });

    });
});