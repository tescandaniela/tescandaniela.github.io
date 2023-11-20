function variablesExamples() {
  console.info(2 + 3);
  console.warn("daniela");

  var employed = true;
  var age = 18;
  console.log("angajat", employed);
  employed = false;
  console.log("angajat", employed);
  employed = "da";
  console.log("angajat", employed);

  var Skills = ["html", "css"];
  Skills;

  console.debug("tipul variabilei skills:", typeof skills);

  var job = document.getElementById("job-title");
  console.warn("job", job);
  console.info(typeof job);
}

variablesExamples();
