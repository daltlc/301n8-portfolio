'use strict';
//NAV------------------------------------------------
// $(document).ready(function() {
//   $('#projects').hide();
//   $('#aboutMe').hide();
//   $('#contact').hide();
// });
//   //Project selection
// $('.comp-top').on('click', 'li:first', function() {
//   $('#aboutMe').fadeOut();
//   $('allProjects').fadeIn();
// });
//   //About me selection
// $('.comp-top').on('click', 'li:nth-child(2)', function() {
//   $('#projects').fadeOut();
//   $('#aboutMe').fadeIn();
// });
//   //Project selection Mobile
// $('.mobile-top').on('click', 'li:first', function() {
//   $('#aboutMe').fadeOut();
//   $('#projects').fadeIn();
// });
//   //About me selection Mobile
// $('.mobile-top').on('click', 'li:nth-child(2)', function() {
//   $('#projects').fadeOut();
//   $('#aboutMe').fadeIn();
// });
var projectsView = {};

$('#aboutMe').hide();
$('#projects').hide();

projectsView.handleMainNav = function() {
  $('.comp-top').on('click', 'li:first', function() {
    console.log('clicked');
    $('#projects').fadeIn();
  });
  // $('.comp-top .li:first').click();
};
$(document).ready(function() {
  projectsView.handleMainNav();
})
