'use strict';


//global variable to store new projects
var allProjects = []

//constructor to contain projects
function Projects (projectData) {
  this.projectName = projectData.projectName;
  this.skills = projectData.skills;
  this.publishedOn = projectData.publishedOn;
  this.body = projectData.body;
}

Projects.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  //$newProject.attr('data-category', this.category);
  //if (!this.publishedOn) $newProject.addClass('draft');
  $newProject.find('.byline').html(this.skills);
  $newProject.find('h1:first').html(this.projectName);
  $newProject.find('.project-body').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  $newProject.append('<hr>');
  return $newProject;
};

projectData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(projectObject) {
  allProjects.push(new Projects(projectObject));
  console.log('pushed');
});

allProjects.forEach(function(project) {
  $('#projects').append(project.toHtml());
  console.log('appended');
});



//NAV------------------------------------------------
$(document).ready(function() {
  $('#projects').hide();
  $('#aboutMe').hide();
  $('#contact').hide();
});
  //Project selection
$('.comp-top').on('click', 'li:first', function() {
  $('#aboutMe').fadeOut();
  $('#projects').fadeIn();
});
  //About me selection
$('.comp-top').on('click', 'li:nth-child(2)', function() {
  $('#projects').fadeOut();
  $('#aboutMe').fadeIn();
});
  //Project selection Mobile
$('.mobile-top').on('click', 'li:first', function() {
  $('#aboutMe').fadeOut();
  $('#projects').fadeIn();
});
  //About me selection Mobile
$('.mobile-top').on('click', 'li:nth-child(2)', function() {
  $('#projects').fadeOut();
  $('#aboutMe').fadeIn();
});



// /*Beginning fade in welcome*/
// $( document ).ready(function() {
//   $('.comp-top li').hide();
//   $('.comp-top h1').delay(1000).fadeIn().delay(1000).fadeOut();
//   $('.comp-top li').delay(2800).fadeIn();
// });
