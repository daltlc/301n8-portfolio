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
$('#projects').hide();
$('#aboutMe').hide();
$('#contact').hide();
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



// Get the modal
// var modal = document.getElementById('myModal');
// // Get the button that opens the modal
// var btn = document.getElementById("one");
// var btn2 = document.getElementById("two");
// var btn3 = document.getElementById("three");
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// btn2.onclick = function() {
//   modal.style.display = "block";
// }
// btn3.onclick = function() {
//   modal.style.display = "block";
// }
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
