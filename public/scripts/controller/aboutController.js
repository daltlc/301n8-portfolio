'use strict';
var app = app || {};

(function(module){
  const aboutController = {};

  aboutController.index = () => {
    $('#aboutMe').hide();

    $('.comp-top').on('click', '#wrap:first', function() {
      $('#projects').fadeOut();
      $('#aboutMe').toggle(1500);

      module.aboutController = aboutController;
    });
  }
})(app);
