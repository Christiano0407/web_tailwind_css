//** ==== Travel Website ===== */
const main = document.querySelector("#idMain"); 


(() => {
  const slideImages = [ 
    {img: "./src/img/travel_one.jpg", title: "Trip & Dream", description:"Encuentra un lugar para ti y tu familia. Los socios ahorran 25% o más en hoteles seleccionados."},
    {img: "./src/img/travel_two.jpg", title: "Think Travel & Dream", description:"Encuentra un lugar para ti y tu familia. Los socios ahorran 25% o más en hoteles seleccionados."},
    {img: "./src/img/travel_three.jpg", title: "Travel & live", description:"Encuentra un lugar para ti y tu familia. Los socios ahorran 25% o más en hoteles seleccionados."},
    {img: "./src/img/travel_four.jpg", title: "Live your Dreams", description:"Encuentra un lugar para ti y tu familia. Los socios ahorran 25% o más en hoteles seleccionados."},
    {img: "./src/img/travel_five.jpg", title: "Trip, Travel & Dream", description:"Encuentra un lugar para ti y tu familia. Los socios ahorran 25% o más en hoteles seleccionados."},
  ]

  const createHtmlStructure = (sliderSelector, images) => {

    const parent = document.querySelector( sliderSelector);

    // Slides
    images.forEach((slideImg, index) => {
      const { img, title, description } = slideImg;
      const slideItem = `
      <div
        id="idItem"
        class="item"
        style="background-image: url('${img}')"
        data-attribute="${index}">

        <div 
          id="idContent" class="content">
          <div id="idName" class="name">${title}</div>
          <div id="idDescription" class="description">${description}</div>
          <button id="idAction" class="action">Explore</button>
        </div>
      </div>
      `;
      const divFragment = document.createRange().createContextualFragment(slideItem);
      parent.appendChild(divFragment);
    });

    // Buttons
    /* const html = `
    <div class="buttons">
      <button class="prev"> Prev</button>
      <button class="next"> Next</button>
    </div>
    `; */
    /* const fragment = document.createRange().createContextualFragment(html);
    parent.parentElement.appendChild(fragment); */
    
  };

  // - Initializations Slider & List Img -
  createHtmlStructure(".slider", slideImages);
  
  
  // References
  const $slider = document.querySelector(".slider");
  const $next = document.querySelector(".next");
  const $prev = document.querySelector(".prev");
  const $container = document.querySelector(".container");
  const $actionBtn = document.querySelector(".action");
  //const items = document.querySelectorAll(".item");
  // Swipe Scroll (Táctil)
  let startX = 0; 
  let endX = 0;
  // Mouse Events
  let isMouseDown = false;

  // Initial Background Images 
  $container.style.backgroundImage = `url('${slideImages[0].img}')`

  // Listeners === Events Click and Swipe ===
  /* $next.addEventListener( 'click', () => {
    const items = document.querySelectorAll(".item");
    $slider.appendChild(items[0]);
  }); */

  /* $prev.addEventListener( 'click', () => {
    const items = document.querySelectorAll(".item");
    $slider.prepend(items[items.length - 1],items[0]);
  }); */

  // - Swipe (Táctil) -
  /* $slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }); */

  /* $slider.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  }); */

  /* $slider.addEventListener("touchend", () => {
    const diffX = startX - endX;
    if(diffX > 50) {
      const items = document.querySelector(".item"); 
      const selectedItem = items[0]; 
      $slider.appendChild(selectedItem);
      $container.style.backgroundImage = `url('${selectedItem.style.backgroundImage.slice(5, -2)}')`;
    }else if(diffX < -50 ) {
      const items = document.querySelector(".item"); 
      const selectedItem = items[0]; 
      $slider.insertBefore(selectedItem, items[items.length - 1]);
      $container.style.backgroundImage = `url('${selectedItem.style.backgroundImage.slice(5, -2)}')`;
    }
  });  */

  // - Mouse -
  $slider.addEventListener("mousedown", (e) => {
    isMouseDown = true; 
    startX = e.clientX; 
  });

  $slider.addEventListener("mousemove", (e) => {
    if(isMouseDown) {
      endX = e.clientX;
    }
  }); 

  $slider.addEventListener("mouseup", () => {
    if(isMouseDown) {
      const diffX = startX - endX;

      if(diffX > 50) {
        const items = document.querySelectorAll(".item"); 
        const selectedItem = items[0]; 
        if(selectedItem instanceof Node) {
          $slider.appendChild(selectedItem);
        }
        $container.style.backgroundImage = `url('${selectedItem.style.backgroundImage.slice(5, -2)}')`;
      }else if(diffX < -50 ) {
        const items = document.querySelectorAll(".item"); 
        const selectedItem = items[0]; 
        $slider.insertBefore(selectedItem, items[items.length - 1]);
        $container.style.backgroundImage = `url('${selectedItem.style.backgroundImage.slice(5, -2)}')`;
      }
    }
    isMouseDown = false; 
  }); 

  // - Event Click Image -
  $slider.addEventListener('click', (e) => {
    const items = document.querySelectorAll(".item");
    const selectedItem = e.target.closest(".item");
    if (selectedItem) {
      items.forEach(item => item.classList.remove("selected"));
      selectedItem.classList.add("selected");
      $container.style.backgroundImage = `url('${selectedItem.style.backgroundImage.slice(5, -2)}')`;
    }
  });

  $actionBtn.addEventListener("click", (e) => {
    document.body.classList.add("transition-display-out");

    setTimeout(() => {
      window.location.href = "./src/html/home.html";
    }, 500 ); 

  });

 })();