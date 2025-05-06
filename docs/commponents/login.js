
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
  
    if (user === "Maryann" && pass === "250125") {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "Informacion.html";
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });
  