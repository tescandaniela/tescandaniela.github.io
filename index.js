function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function ShowHome() {
  hide("projects");
  hide("languages");
  hide("Skills");

  var page = document.getElementById("HOME");
  page.style.display = "block";
}

function ShowSkills() {
  hide("HOME");
  hide("languages");
  hide("projects");

  var page = document.getElementById("Skills");
  page.style.display = "block";
}

function ShowProjects() {
  hide("languages");
  hide("HOME");
  hide("Skills");

  var page = document.getElementById("projects");
  page.style.display = "block";
}
function ShowLanguages() {
  hide("HOME");
  hide("Skills");
  hide("projects");

  var page = document.getElementById("languages");
  page.style.display = "block";
}
