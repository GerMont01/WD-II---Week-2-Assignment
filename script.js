write = (input) => {
    document.getElementById("msginput").value = "";
    document.getElementById("msginput").blur();
    $(".content").animate({
        height: "50vh"
      }, 1000, function() {
        $("#message").text(input);
      }); 
}

$("#btn").click(function(){
    $("#message").text('') ;
    $(".content").animate({
        height: "35vh"
    }, 1000);
    let input = document.getElementById("msginput").value;
    if (input == ""){
        document.getElementById("msginput").blur();
        $(".content").animate({
            height: "50vh"
        }, 1000, function() {
            $("#message").text('Please write a message first!');
            setTimeout(function(){ 
                $("#message").text('') ;
                $(".content").animate({
                    height: "35vh"
                }, 1000);
            }, 2000);
        });
        
    }
    else {
        write(input);
    }
});

writeMessage = () => {
    if(event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("btn").click(); 
    }
}

