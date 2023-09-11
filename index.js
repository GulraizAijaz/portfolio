const fields = document.getElementById("fields");
const skillField = document.getElementById("skill-field");
const educationField = document.getElementById("education-field");
const experienceField = document.getElementById("experience-field");
const skill = document.getElementById("skills");
const education = document.getElementById("education");
const experience = document.getElementById("experience");

// experienceField.classList.add("gg");
// educationField.classList.add("gg");
skillField.classList.add("gg");

fields.addEventListener('click',function(e){
    let selectedField = e.target.textContent;
    if(selectedField === "Skills"){
        experienceField.classList.remove("gg");
        educationField.classList.remove("gg");
        skillField.classList.add("gg");
        education.style = "visibility: hidden;";
        experience.style = "visibility: hidden;";
        skill.style = "visibility: visible;";
    }
    else if(selectedField === "Education"){
        experienceField.classList.remove("gg");
        educationField.classList.add("gg");
        skillField.classList.remove("gg");
        skill.style = "visibility: hidden;";
        experience.style = "visibility: hidden;";
        education.style = "visibility: visible;";
    }
    else if(selectedField === "Experience"){
        experienceField.classList.add("gg");
        educationField.classList.remove("gg");
        skillField.classList.remove("gg");
        skill.style = "visibility: hidden;";
        experience.style = "visibility: visible;";
        education.style = "visibility: hidden;";
    }
    else{
        // experienceField.classList.add("gg");
        // educationField.classList.add("gg");
        // skillField.classList.add("gg");
        // skill.style = "visibility: visible;";
        // experience.style = "visibility: visible;";
        // education.style = "visibility: visible;"; 
    }
}

)


// contact section start here 


const alerted = function(){
    alert('message send succesfully')
}
