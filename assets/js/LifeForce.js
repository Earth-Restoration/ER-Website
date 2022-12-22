var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mouseWheel: {
        invert: false,
    },
    // autoHeight: true
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});

$(document).ready(function()
    {
        $('#LF-slider').owlCarousel(
            {
                loop:true,
                dots:false,
                center:true,
                responsive:
                {
                    0:{
                        item:1
                    },
                    750:{
                        item:2
                    },
                    1170:{
                        item:3
                    },
                }
            }
        );

        $('#arrow-l').click(function()
        {
            $('#LF-slider').trigger('prev.owl.carousel');
        });
        $('#arrow-r').click(function()
        {
            $('#LF-slider').trigger('next.owl.carousel');
        });
    });

    let sliders = document.querySelectorAll('.Lf-slider-container');
    let index = 0;

    // next function
    function next(){
        sliders[index].classList.remove('active');
        index = (index + 1) % sliders.length;
        sliders[index].classList.add('active');
    }

    // previous function
    function prev(){
        sliders[index].classList.remove('active');
        index = (index - 1 + sliders.length) % sliders.length;
        sliders[index].classList.add('active');
    }
