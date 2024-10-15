let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});
function func(){
    var email = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
 if (email =='tanuthakre59@gmail.com' && pass == '123456')
   { alert("success full!")
window.location.assign("index.html")  
}
else{
alert(" Invalid ")
}
}
 