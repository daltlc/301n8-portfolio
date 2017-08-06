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
  $('#aboutMe').toggle(1500);
});

$(document).ready(function() {
  projectsView.handleProjectNav();
})
//Type it js load
$(document).ready(function() {
  $('.type-it').typeIt({
    speed: 150,
    lifeLike: false,
    autoStart: false
  })
.tiType('Dalton Carr')
})

jQuery(function($, undefined) {
  $('#term_demo').terminal(function(command) {
    if (command !== '') {
      try {
        var result = window.eval(command);
        if (result !== undefined) {
          this.echo(new String(result));
        }
      } catch(e) {
        this.error(new String(e));
      }
    } else {
      this.echo('');
    }
  }, {
    greetings: 'Welcome',
    name: 'js_demo',
    height: 200,
    prompt: 'js> '
  });
});
