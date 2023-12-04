var activePage = "HOME";

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  console.info("page", page);
  page.style.display = "block";
}

function ShowHome() {
  hide(activePage);

  show("HOME");
  activePage = "HOME";
}

function ShowSkills() {
  hide(activePage);

  show("Skills");
  activePage = "Skills";
}

function ShowProjects() {
  hide(activePage);

  show("projects");
  activePage = "projects";
}
function ShowLanguages() {
  hide(activePage);

  show("languages");
  activePage = "languages";
}
