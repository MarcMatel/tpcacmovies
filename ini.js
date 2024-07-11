document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
   
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username ===  "" || password === "") {
        document.getElementById("loginError").innerHTML = "Usuario o contraseña incorrectos";
    } else {
     window.location.href = "peliculas.html";   
    }
});