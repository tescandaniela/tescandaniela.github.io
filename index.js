function ShowHome() {
  document.getElementById("projects").style.display = "none";
  document.getElementById("Skills").style.display = "none";
  document.getElementById("languages").style.display = "none";

  var page = document.getElementById("HOME");
  page.style.display = "block";
}

function ShowSkills() {
  document.getElementById("HOME").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("projects").style.display = "none";

  var page = document.getElementById("Skills");
  page.style.display = "block";
}

function ShowProjects() {
  document.getElementById("languages").style.display = "none";
  document.getElementById("HOME").style.display = "none";
  document.getElementById("Skills").style.display = "none";

  var page = document.getElementById("projects");
  page.style.display = "block";
}
function ShowLanguages() {
  document.getElementById("HOME").style.display = "none";
  document.getElementById("Skills").style.display = "none";
  document.getElementById("projects").style.display = "none";

  var page = document.getElementById("languages");
  page.style.display = "block";
}
