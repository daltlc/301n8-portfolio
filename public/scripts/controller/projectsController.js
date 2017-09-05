'use strict';
var app = app || {};
(function(module) {
  const projectController = {};
  var projectsView = {};

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
  module.projectController = projectController;


  $(document).ready(function() {
    projectsView.handleProjectNav();
  })

})(app);
