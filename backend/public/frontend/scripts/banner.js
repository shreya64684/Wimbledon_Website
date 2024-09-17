fetch("../components/banner.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("banner-container").innerHTML = data;
  });