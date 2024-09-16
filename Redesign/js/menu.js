let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Start of JQuery Testing
$(document).ready(function() {
    alert('Teting jQuery library')
});
// $(function() {
//     alert('Teting jQuery library') 
// })   More compact version of the above


$('a.nav-link').hover(function() {
    $(this).css({
        'color':'orange',
    });
}); // Code used for changing the nav-link hover color

$(document).ready(function() {
    $('h1').animate({ left: '50px' }, 1000) //First Move To Right
        .animate({ left: '-50px' }, 1000) // Then move back to the left
        .animate({ left: '50px' }, 1000) // Repeat move to the right again
        .animate({ left: '-50px' }, 1000) // Then back to the left
        .animate({ left: '0px' }, 1000);// Stop In The Middle
}); // The code used to animate the title heading

$(document).ready(function() {
    // Create a new div with the class line
    var lineDiv = $('<div class="line"></div>');
    $('section.grid-container.hours article').before(lineDiv); 
    $('.line').css('margin', '0');
    $('.define').css('margin-top', '0');
}); // Code for adding lines to make it more readable

$(document).ready(function() {
    // Apply styles to even list items
    $('ul.list li:odd').addClass('even-item');
    $('.even-item').css({
        'color':'white',
        'background-color':'black'
    });
}); // Code for filtering even list items for assignment
