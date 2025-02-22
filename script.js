let formSection = document.querySelector(".form-section");

// now we will write two function to switch between login and register

function login(){
    formSection.classList.add("active");
}

function register(){
    formSection.classList.remove("active");
}