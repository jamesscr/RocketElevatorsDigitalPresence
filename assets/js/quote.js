 //add collapse to all tags hidden and showed by select mySelect
$('.mySelect_hide').addClass('collapse');

//on change hide all divs linked to select and show only linked to selected option
$('#myBuilds').change(function(){
    //Saves in a variable the wanted div
    var selector = '.mySelect_' + $(this).val();

    //hide all elements
    $('.mySelect_hide').collapse('hide');

    //show only element connected to selected option
    $(selector).collapse('show');
});  




//No apart/No floors = average doors per floors

//require one elevators for  6 every appartement

//if more than 20 stores double elevator shaft


$(document).ready(function() {

    $('#inp-apartments').keyup(function() {  
        updateTotal();
    });
    
    $('#inp-floors').keyup(function() {  
        updateTotal();
    });

    $('#inp-basement').keyup(function() {  
        updateTotal();
    });

    $('#inp-elevators').keyup(function() {  
        updateTotal();
    });

    $('#inp-floors').keyup(function() {  
        updateTotal();
    });

    $('#inp-floors').keyup(function() {  
        updateTotal();
    });

    $('#inp-floors').keyup(function() {  
        updateTotal();
    });
