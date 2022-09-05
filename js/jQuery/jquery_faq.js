// Shows and hides all dd items
$('#toggle').click(function(e) {
    e.preventDefault();
    $('dd').toggleClass('invisible');
})
// Toggle highlighted class on dd items
$('dd').click(function(e) {
    $(this).toggleClass('highlighted');
})
// Button to highlight last element in the list
$('button').click(function(e) {
    $('ul').each(function() {
        $(this).children().last().toggleClass('highlighted');
    })  
})
// Children list items bold when h3 is clicked
$('h3').click(function(e) {
    let headingId = e.target.nextElementSibling.id;
    $(`#${headingId}`).children().toggleClass('bold').css;
})