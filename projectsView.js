'use strict';

var projectsView = {};

$('#aboutMe').hide();
$('#projects').hide();

projectsView.handleProjectNav = function() {
  $('.comp-top').on('click', '#wrap:nth-child(2)', function() {
    console.log('clicked');
    $('#aboutMe').fadeOut();
    $('#projects').toggle();
  });
  $('.mobile-top').on('click', 'li:first', function(){
    console.log('clicked');
    $('#aboutMe').fadeOut();
    $('#projects').toggle();
  })

};
//About me selection
$('.comp-top').on('click', '#wrap:first', function() {
  $('#projects').fadeOut();
  $('#aboutMe').toggle();
});

$(document).ready(function() {
  projectsView.handleProjectNav();
})
