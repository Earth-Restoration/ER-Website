VanillaTilt.init(document.querySelector(".glassmorphic-card1"), {
  max: 15,
  speed: 200,
});

VanillaTilt.init(document.querySelector(".card2"), {
  max: 15,
  speed: 200,
});

VanillaTilt.init(document.querySelector(".card3"), {
  max: 15,
  speed: 200,
});

VanillaTilt.init(document.querySelector(".card4"), {
  max: 15,
  speed: 200,
});

VanillaTilt.init(document.querySelector(".card5"), {
  max: 15,
  speed: 200,
});

VanillaTilt.init(document.querySelector(".card6"), {
  max: 15,
  speed: 200,
});

VanillaTilt.init(document.querySelector(".card7"), {
  max: 15,
  speed: 200,
});

VanillaTilt.init(document.querySelector(".card8"), {
  max: 15,
  speed: 200,
});

VanillaTilt.init(document.querySelector(".card9"), {
  max: 15,
  speed: 200,
});

VanillaTilt.init(document.querySelector(".card10"), {
  max: 15,
  speed: 200,
});

VanillaTilt.init(document.querySelector(".card11"), {
  max: 15,
  speed: 200,
});

VanillaTilt.init(document.querySelector(".card12"), {
  max: 15,
  speed: 200,
});

i=0 ;
    
    $('.slideimage').click(function(){
       $('.active1').addClass('nonActive').find('span').empty()
        $(this).removeClass('nonActive').addClass('active1')
        i= $(this).index()
    })
    
    setItner = setInterval(go,4000);
    
    function go(){
       $('.active1').addClass('nonActive').find('span').empty()
        $($('.slideimage')[i%4]).removeClass('nonActive').addClass('active1')
        i++;
    }
    