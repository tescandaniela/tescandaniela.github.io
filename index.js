function ShowHome() {
  var page = (getElementById("HOME").style.display = "none");
  page.style.display = "block";

  function ShowProjects() {
    var oldPage = document.getElementById("projects");
    oldPage.style.display = "block";
    var page = document.getElementById("languages");
    page.style.display = "none";
  }
  function ShowLanguages() {
    var page = document.getElementById("languages");
    page.style.display = "block";
  }
  function ShowSkills() {
    var page = document.getElementById("Skills");
    page.style.display = "none";
  }

  var oldPage2 = document.getElementById("projects");
  oldPage.style.display = "none";
}
