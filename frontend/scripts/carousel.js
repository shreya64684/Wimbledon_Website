fetch("../components/carousel.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("carousel-container").innerHTML = data;
  })
  .catch((error) => console.error("Error fetching carousel:", error));

async function loadCarousel() {
  try {
    const response = await fetch("/api/carousel");
    const carouselItems = await response.json();
    console.log(carouselItems);
    const carouselInner = document.getElementById("carousel-inner");
    carouselInner.innerHTML = "";
   
    let isActive = true;

    carouselItems.forEach((item) => {
      const carouselItem = `
              <div class="carousel-item ${isActive ? "active" : ""}">
                <img src="${item.image_url}" class="d-block w-100" alt="${
        item.title
      }">
                <div class="carousel-caption d-none d-md-block" style="">
                  <h5>${item.title}</h5>
                  <p>${item.description}</p>
                  <a href="${item.link}" class="btn btn-primary">Read More</a>
                </div>
              </div>
            `;
      console.log(carouselItem);
      carouselInner.innerHTML += carouselItem;
      console.log(carouselInner);
      isActive = false;

    

     
    });
  } catch (error) {
    console.error("Error fetching carousel items:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadCarousel);
