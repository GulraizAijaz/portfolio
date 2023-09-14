const fields = document.getElementById("fields");
const skillField = document.getElementById("skill-field");
const educationField = document.getElementById("education-field");
const experienceField = document.getElementById("experience-field");
const skill = document.getElementById("skills");
const education = document.getElementById("education");
const experience = document.getElementById("experience");
const menuIcon = document.getElementById("header-menu-icon");
const closeBtn = document.getElementById("close-menu");
const sideMenu = document.getElementById("side-menu");


menuIcon.onclick=function(){
  sideMenu.classList.toggle("side-menu-toggle");
};
closeBtn.onclick=function(){
    sideMenu.classList.toggle("side-menu-toggle");
    
};
sideMenu.onclick=function(){
    sideMenu.classList.remove("side-menu-toggle");
};



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
        
    }
}

)


// contact section start here 


const alerted = function(){
    alert('message cant be send because its just a frontend site')
}
