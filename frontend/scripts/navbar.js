fetch("../components/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;

    // Now add the event listener after the navbar HTML has been injected
    document.getElementById('menuToggle').addEventListener('click', function() {
      const navLinks = document.getElementById('navLinks');
      navLinks.classList.toggle('active');
    });
  });



