fetch("../components/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;

    // Now add the event listener after the navbar HTML has been injected
    document
      .getElementById("menuToggle")
      .addEventListener("click", function () {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.toggle("active");
      });

    // let navLinks = document.getElementById("navLinks");
    

    // var lis = navLinks.getElementsByTagName("a");
    // console.log(lis);
    // for (var i = 0; i < lis.length; i++) {
    //   console.log(lis[i]);
    //   lis[i].addEventListener("click", function () {
    //     var current = document.getElementsByClassName("active");
    //     console.log(current);
    //     console.log(current[0].className);
        
    //     current[0].className = current[0].className.replace(" active", "");
    //     this.className += " active";
    //   });
    // }


    const activePage = window.location.pathname;
    console.log(activePage);
    const navLinks = document.querySelectorAll('ul a').
    forEach(link => {
      if(link.href.includes(`${activePage}`)){
        console.log(`${activePage}`);
        link.classList.add('active');
        
      }
    })
  });
