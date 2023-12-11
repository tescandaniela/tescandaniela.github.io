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

function showPage(id) {
  console.info("show page", id);
  hide(activePage);
  show(id);
  activePage = id;
}

function initEvents() {
  var toolbar = document.querySelector("#top-menu-mar");
  toolbar.addEventListener("click", function (e) {
    var page = e.target.innerHTML.toLowerCase();
    console.warn("event", page);
    showPage(page);
  });
}

//executii
showPage(activePage);
initEvents();
