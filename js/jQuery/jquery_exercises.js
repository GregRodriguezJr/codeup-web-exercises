"use strict";

// ID Selectors 
// --------------------- 

/* 
$(function() {
    alert( 'The DOM has finished loading!' );
});

const title = $('#title').html();
alert(title);

const subTitle = $('#sub-title').html();
alert(subTitle); 
*/

// Class Selectors 
// ---------------------

// const listItems = $('.codeup').css('border', '1px solid red');

// Element Selectors
// ---------------------

// const listItemsEl = $('li').css('font-size', '20px');

// Multiple Selectors
// ---------------------

// const highlightEl = $('h1, p, li').css('background-color', 'yellow');

// Mouse Events
// ---------------------

$('h1').click(function() {
    $(this).css('background-color', 'lightblue');
});

$('p').dblclick(function() {
    $(this).css('font-size', '18px');
});

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);