'use strict';

var app = app || {};
(function(module){

// var allProjects = [];
// var projectsView = {};

//constructor to contain projects
function Projects (projectData) {
  this.projectName = projectData.projectName;
  this.skills = projectData.skills;
  this.publishedOn = projectData.publishedOn;
  this.body = projectData.body;
}
  Projects.all =[];

  Projects.fetchAll = function() {
    if (localStorage.projectData) {
      Projects.loadAll(JSON.parse(localStorage.projectData));
      projectsView.initIndexPage();
    } else {
      $.getJSON('data/projects.json', function(data) {
        localStorage.projectData = JSON.stringify(data);
        Projects.loadAll(data);
        console.log('fetched');
      });
    }
  }


  Projects.loadAll = function(projectData){
    projectData.sort(function(a,b){
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });
    projectData.map(function(project) {
      Projects.all.push(new Projects(project));
      console.log('pushed');
    });
    Projects.all.map(function(project) {
      $('#projects').append(project.toHtml());
      console.log('appended');
    });
  }

// projectsView.initIndexPage = function() {
//   Projects.all.forEach(function(project) {
//     $('#projects').append(project.toHtml());
//     console.log('appended');
  // })
  // projectData.forEach(function(projectObject) {
  //   allProjects.push(new Projects(projectObject));
  //   console.log('pushed');
  // });
// };

  module.Projects = Projects;
})(app);
