'use strict';

var app = app || {};

(function(module){
  //adding projects to the DOM
  module.Projects.prototype.toHtml = function() {
    var newProject = Handlebars.compile($('#handlebarTemplate').text());
    return newProject(this);
  };


})(app);
