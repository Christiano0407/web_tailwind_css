//** ==== Travel Website ===== */
(() => {
   
  const slideImages = [ 
    {img: "./src/img/travel_one.jpg", title: "Trip & Dream", description:"Travel and Live your Dreams"},
    {img: "./src/img/travel_two.jpg", title: "Think Travel & Dream", description:"Travel and Live your Dreams"},
    {img: "./src/img/travel_three.jpg", title: "Travel & live", description:"Travel and Live your Dreams"},
    {img: "./src/img/travel_four.jpg", title: "Live your Dreams", description:"Travel and Live your Dreams"},
    {img: "./src/img/travel_five.jpg", title: "Trip, Travel & Dream", description:"Travel and Live your Dreams"},
  ]

  const createHtmlStructure = (sliderSelector, images) => {

    const parent = document.querySelector( sliderSelector, images );

    // Slides
    images.forEach((slideImg, index) => {
      const { img, title, description } = slideImg;
      const slideItem = `
      <div
        class="item"
        style="background-image: url('${img}')"
        data-attribute="${index}"
      >
        <div class="content">
          <div class="name">${title}</div>
          <div class="description">${description}</div>
          <button>Ver más</button>
        </div>
      </div>
      `;
      const divFragment = document.createRange().createContextualFragment(slideItem);
      parent.appendChild(divFragment);
    });

    // Buttons
    const html = `
    <div class="buttons">
      <button class="prev"> Prev</button>
      <button class="next"> Next</button>
    </div>
    `;
    const fragment = document.createRange().createContextualFragment(html);
    parent.parentElement.appendChild(fragment);
    
  };

  // Initializations
  createHtmlStructure(".slider", slideImages);
  
  
  // References
  const $slider = document.querySelector(".slider");
  const $next = document.querySelector(".next");
  const $prev = document.querySelector(".prev");
  const $container = document.querySelector(".container");

  // Listeners
  $next.addEventListener( 'click', () => {
    const items = document.querySelectorAll(".item");
    $slider.appendChild(items[0]);
  });

  $prev.addEventListener( 'click', () => {
    const items = document.querySelectorAll(".item");
    $slider.prepend(items[items.length - 1],items[0]);
  });

  $slider.addEventListener('click', (e) => {
    const items = document.querySelectorAll(".item");
    const selectedItem = e.target.closest(".item");
    if (selectedItem) {
      items.forEach(item => item.classList.remove("selected"));
      selectedItem.classList.add("selected");
      $container.style.backgroundImage = `url('${selectedItem.style.backgroundImage.slice(5, -2)}')`;
    }
  });

 })();