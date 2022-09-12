$(document).ready(function () {
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);
    var alertbox = document.getElementById('alert');

    $(".next").click(function () {

        // if (document.forms['msform'].country.value === "") {
        //     document.getElementById('errormsg').style.display = "block";
        //     alertbox.innerHTML = "this Country feild is required";
        //     return false;
        // }
        // else {
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(++current);
        // }
    });

    $(".previous").click(function () {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        document.getElementById('errormsg').style.display = "none";

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    $(".submit").click(function () {
        return false;
    })

});

function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

    if (!isNaN(currentVal)) {
        parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
        parent.find('input[name=' + fieldName + ']').val(0);
    }
}

function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

    if (!isNaN(currentVal) && currentVal > 0) {
        parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
        parent.find('input[name=' + fieldName + ']').val(0);
    }
}

$('.input-group').on('click', '.button-plus', function (e) {
    incrementValue(e);
});

$('.input-group').on('click', '.button-minus', function (e) {
    decrementValue(e);
});

function showHouseMembers() {
    document.getElementById('householdmembers').style.display = "block";
};

function justme() {
    document.getElementById('householdmembers').style.display = "none";
}

function carDetails() {
    document.getElementById('showCar').style.display = "block";
};

function carDetailsNone() {
    document.getElementById('showCar').style.display = "none";
};

function hidevegan() {
    document.getElementById('dairy').style.display = "none";
    document.getElementById('redMeat').style.display = "none";
    document.getElementById('protion').style.display = "none";
};

function showdiary() {
    document.getElementById('dairy').style.display = "block";
    document.getElementById('redMeat').style.display = "none";
    document.getElementById('protion').style.display = "none";
};

function showRemMeadprotien() {
    document.getElementById('redMeat').style.display = "block";
    document.getElementById('protion').style.display = "block";
    document.getElementById('dairy').style.display = "block";
};

function showbus() {
    var x = document.getElementById("bus");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

function showtransitrail() {
    var x = document.getElementById("rail");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

function showintercity() {
    var x = document.getElementById("intercity");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};