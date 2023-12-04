function show(id) {
  console.info("show", id);

  var page = document.getElementById(id);
  console.info("page", page);
  page.style.display = "block";
}

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function ShowHome() {
  hide("projects");
  hide("languages");
  hide("Skills");

  show("HOME");
}

function ShowSkills() {
  hide("HOME");
  hide("languages");
  hide("projects");

  show("Skills");
}

function ShowProjects() {
  hide("languages");
  hide("HOME");
  hide("Skills");

  show("projects");
}
function ShowLanguages() {
  hide("HOME");
  hide("Skills");
  hide("projects");

  show("languages");
}
