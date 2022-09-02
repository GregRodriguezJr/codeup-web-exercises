"use strict";

/* 
ID Selectors
1. Create content in your HTML file using at least the following elements: h1, p, ul, li, div.
2. Add several attributes to your elements; you will need both id and class attributes.
3. Use jQuery to select an element by the id. Alert the contents of the element.
4. Update the jQuery code to select and alert a different id.
5. Use the same id on 2 elements. How does this change the jQuery selection?
6. Remove the duplicate id. Each id should be unique on that page.
*/

$(function() {
    alert( 'The DOM has finished loading!' );
});

const title = $('#title').html();
alert(title);

const subTitle = $('#sub-title').html();
alert(subTitle);

/* 
Class Selectors
1. Remove your custom jQuery code from previous exercises.
2. Update your code so that at least 3 different elements have the same class named codeup.
3. Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
4. Remove the class from one of the elements. Refresh and test that the border has been removed.
5. Give another element an id of codeup. Does this element get a border now?
*/

const listItems = $('.codeup').css('border', '1px solid red');

/* 
Element Selectors
1. Remove your custom jQuery code from previous exercises.
2. Using jQuery, set the font-size of all li elements to 20px.
3. Craft selectors that highlight all the h1, p, and li elements.
4. Create a jQuery statement to alert the contents of your h1 element(s). 
*/

const listItemsEl = $('li').css('font-size', '20px');

// Multiple Selectors
// Combine your selectors that highlight all the h1, p, and li elements.

const highlightEl = $('h1, p, li').css('background-color', 'yellow');

