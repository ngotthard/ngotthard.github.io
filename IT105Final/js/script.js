//variables
const heading = document.querySelector("#heading");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");

//functions
lastName.oninput = function(){
    if (firstName.value == "Jack"){
        heading.innerHTML = "Welcome to the site, Jack!";
    } else if (firstName.value == "Larry"){
        heading.innerHTML = "You are not Jack!";
    } else {
        heading.innerHTML = "We love to hear your feedback!";
    }
}

document.querySelector("#rate1").onclick = function(){
    alert("Wrong Answer, Try Again")
}
document.querySelector("#rate2").onclick = function(){
    alert("You have selected a rating of 2")
}
document.querySelector("#rate3").onclick = function(){
    alert("You have selected a rating of 3")
}
document.querySelector("#rate4").onclick = function(){
    alert("You have selected a rating of 4")
}
document.querySelector("#rate5").onclick = function(){
    alert("Congratulations, this is the correct answer")
}