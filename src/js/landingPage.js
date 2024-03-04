//** === Landing Page === */
( () => {
   
    const slideImages = [ 
      {img: "../img/travel_one.jpg", title: "Trip & Dream", description:"Travel and Live your Dreams"},
      {img: "../img/travel_two.jpg", title: "Think Travel & Dream", description:"Travel and Live your Dreams"},
      {img: "../img/travel_three.jpg", title: "Travel & live", description:"Travel and Live your Dreams"},
      {img: "../img/travel_four.jpg", title: "Live your Dreams", description:"Travel and Live your Dreams"},
      {img: "../img/travel_five.jpg", title: "Trip, Travel & Dream", description:"Travel and Live your Dreams"},
    ]

    const createHtmlStructure = (sliderSelector, images) => {

      const parent = document.querySelector(sliderSelector); 

      // ====== Slides
      images.forEach((slideImg, index) => {

        const {img, title, description} = slideImg;

        const sliderItem = `
        <div class="item" style="background-image: url('${img}') data-attribute='${index}'>
            <div class="content">
             <div class="name">${title}</div>
             <div class="description">${description}</div>
             <button class="btn"> View More </button>
            </div> 
        </div>
        `; 
        // ===== Call Nodes and DOM Text 
        const divFragment = document.createRange().createContextualFragment(sliderItem); 

        parent.appendChild(divFragment);

      });

        // ===== Buttons Scroll 
        const btnHtml = `
          <div class="buttons">
            <button class="prev">Prev</button>
            <button class="after">After</button>
          </div>
        `;

        const fragment = document.createRange().createContextualFragment(html);
        parent.parentElement.appendChild(fragment);

      };
       
        // ===== Initial Fragment Slider 
        createHtmlStructure(".slider", slideImages);
        
        // ===== References DOM ($)
        const $slider = document.querySelector(".slider");
        const $prev = document.querySelector(".prev");
        const $next = document.querySelector(".next");

        // ==== Events & Listener 
        $next.addEventListener("click", () => {
          const items = document.querySelectorAll(".item"); 
          $slider.appendChild(items[0]);
        });

        $prev.addEventListener("click", () => {
          const items = document.querySelectorAll(".item");
          $slider.appendChild(items[items.length -1]);
        })

   } )();