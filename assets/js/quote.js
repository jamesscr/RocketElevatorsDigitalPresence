$(document).ready(function() {
//add collapse to all tags hidden and showed by select mySelect
$('.mySelect_hide').addClass('collapse');

//on change hide all divs linked to select and show only linked to selected option
$('#myBuilds').change(function () {
    //Saves in a variable the wanted div
    var selector = '.mySelect_' + $(this).val();

    //hide all elements
    $('.mySelect_hide').collapse('hide');

    //show only element connected to selected option
    $(selector).collapse('show');
});
});

