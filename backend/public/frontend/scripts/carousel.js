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

    // const carouselIndicators = document.getElementById("carousel-indicators");
    const carouselInner = document.getElementById("carousel-inner");
    carouselInner.innerHTML = "";

    let isActive = true;

    carouselItems.forEach((item, index) => {
      // const carouselItem = `
      //         <div class="carousel-item ${isActive ? "active" : ""}">
      //           <img src="${item.image_url}" class="d-block w-100" alt="${
      //   item.title
      // }">
      //           <div class="carousel-caption d-none d-md-block" style="">
      //             <h5>${item.title}</h5>
      //             <p>${item.description}</p>
      //             <a href="${item.link}" class="btn btn-primary">Read More</a>
      //           </div>
      //         </div>
      //       `;
      // console.log(carouselItem);
      // carouselInner.innerHTML += carouselItem;
      // console.log(carouselInner);
      // isActive = false;

      //#2
      // Create the indicator
    //   const indicator = document.createElement("li");
    //   indicator.setAttribute("data-target", "#carouselExampleIndicators");
    //   indicator.setAttribute("data-slide-to", index);
    //   if (index === 0) indicator.classList.add("active");
    //   carouselIndicators.appendChild(indicator);

    //   // Create the carousel item
    //   const carouselItem = document.createElement("div");
    //   carouselItem.classList.add("carousel-item");
    //   if (index === 0) carouselItem.classList.add("active");

    //   // Add the content (image, title, description)
    //   carouselItem.innerHTML = `
    //   <img src="${item.image_url}" class="d-block w-100" alt="${item.title}">
    //   <div class="carousel-caption d-none d-md-block">
    //     <h5><a href="${item.link}" style="color: white;">${item.title}</a></h5>
    //     <p>${item.description}</p>
    //   </div>
    // `;
    //   carouselInner.appendChild(carouselItem);
    // Create a carousel item div
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    
    // Add the 'active' class only to the first item
    if (index === 0) {
        carouselItem.classList.add('active');
    }

    // Populate the item with image, title, description, and link
    carouselItem.innerHTML = `
        <img src="${item.image_url}" class="d-block w-100" alt="${item.title}">
        <div class="carousel-caption">
            <h5><a href="${item.link}" target="_blank">${item.title}</a></h5>
            <p>${item.description}</p>
        </div>
    `;

    // Append to the carousel inner container
    carouselInner.appendChild(carouselItem);

    });
  } catch (error) {
    console.error("Error fetching carousel items:", error);
  }
}
// $('#carouselExampleIndicators').carousel();
document.addEventListener("DOMContentLoaded", loadCarousel);
