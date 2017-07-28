'use strict';


//global variable to store new projects
var allProjects = []

//constructor to contain projects
function Projects (projectName, dateCreated, skills, fileLocation) {
  this.projectName = projectName;
  this.dateCreated = dateCreated;
  this.skills = skills;
  this.fileLocation = fileLocation;
  allProjects.push(this);
}
