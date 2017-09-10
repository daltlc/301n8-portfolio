'use strict';

var app = app || {};
(function(module){


//constructor to contain projects
function Projects (projectData) {
  this.projectName = projectData.projectName;
  this.skills = projectData.skills;
  this.publishedOn = projectData.publishedOn;
  this.body = projectData.body;
}
  Projects.all =[];

  Projects.prototype.toHtml = function() {
    var newProject = Handlebars.compile($('#handlebarTemplate').text());
    return newProject(this);
  };


  Projects.fetchAll = function() {
    if (localStorage.projectData) {
      Projects.loadAll(JSON.parse(localStorage.projectData));
      projectsView.initIndexPage();
    } else {
      $.getJSON('data/projects.json', function(data) {
        localStorage.projectData = JSON.stringify(data);
        Projects.loadAll(data);
        console.log('feteched');
      });
    }
  }


  Projects.loadAll = function(projectData){
    projectData.sort(function(a,b){
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    })
    projectData.map(function(project) {
      Projects.all.push(new Projects(project));
      console.log('pushed');
    })
    Projects.all.map(function(project) {
      $('#projects').append(project.toHtml());
      console.log('appended');
    });
  }

  module.Projects = Projects;
})(app);
