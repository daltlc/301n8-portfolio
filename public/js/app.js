'use strict';


//global variable to store new projects
var allProjects = [];

//constructor to contain projects
function Projects (projectData) {
  this.projectName = projectData.projectName;
  this.skills = projectData.skills;
  this.publishedOn = projectData.publishedOn;
  this.body = projectData.body;
}

Projects.prototype.toHtml = function() {
  var newProject = Handlebars.compile($('#handlebarTemplate').text());
  return newProject(this);
};


Projects.loadAll = function(projectData){
  projectData.sort(function(a,b){
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  projectData.forEach(function(projectObject) {
    allProjects.push(new Projects(projectObject));
  })
}


Projects.fetchAll = function() {
  if (localStorage.projectData) {
    Projects.loadAll(JSON.parse(localStorage.projectData));
    projectsView.initIndexPage();
  } else {

    $.getJSON('projects.json', function(projectData) {
      Projects.loadAll(projectData);
      localStorage.projectData = JSON.stringify(projectData);
      projectsView.initIndexPage();
    });
  }
}



projectsView.initIndexPage = function() {
  Projects.all.forEach(function(project) {
    $('#projects').append(project.toHtml());
    console.log('appended');
  })
};



// projectData.sort(function(a,b) {
//   return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
// });
//
// projectData.forEach(function(projectObject) {
//   allProjects.push(new Projects(projectObject));
//   console.log('pushed');
// });

// allProjects.forEach(function(project) {
//   $('#projects').append(project.toHtml());
//   console.log('appended');
// });

// /*Beginning fade in welcome*/
// $( document ).ready(function() {
//   $('.comp-top li').hide();
//   $('.comp-top h1').delay(1000).fadeIn().delay(1000).fadeOut();
//   $('.comp-top li').delay(2800).fadeIn();
// });
