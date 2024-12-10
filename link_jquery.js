// $( document ).ready(function() {
 
//     $( "a" ).click(function( event ) {
 
//         alert( "Thanks for visiting!" );
 
//     });
 
// });

$(function() {
    $("#myLink").on('click',function (e) { 
        e.preventDefault();
        alert("Thanks for visiting!");
        
    });
});

