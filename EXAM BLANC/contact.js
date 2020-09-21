
// VALIDATION FORMULAIRE // 

function formValidation() {
    var formulaire = document.getElementById("formulaire");
    var name = document.forms["contactForm"]["nom"].value;
     console.log(name);

    if (name === "") {
      var form_nom = document.getElementById("formulaire_nom");
      form_nom.classList.add("invalid");

      return false;
    }
    
    return true;
    
}