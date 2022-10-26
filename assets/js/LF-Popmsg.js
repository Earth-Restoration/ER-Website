// var modelBox = document.getElementById("modelBox");

    window.addEventListener("load", function(){

        setTimeout ( 
            function open(event){
            document.querySelector("#modelBox").style.display = "block";
            },
            5000
        )
    });
    //   document.onmouseleave = function(){
    //       modelBox.style.display = "block";
    //   }

      function closeModel(){
          modelBox.style.display = "none";
      }
