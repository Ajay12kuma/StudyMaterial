window.onload = function() {
    document.querySelector("#shown-login").addEventListener("click", function() {
        document.querySelector(".popup").classList.add("active");
    });


    document.querySelector(".popup .close-btn").addEventListener("click", function() {
        document.querySelector(".popup").classList.remove("active");
    });


}

function displayDate() {

    if (document.getElementById("email").value == "Ajay") {
        console.log("correct credential......");
        window.location.href = '/homepage.html';
    } else {
        console.log("incorrect credential......");
    }
};