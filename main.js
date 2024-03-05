//** ==== Travel Website ===== */
( () => {
   
  const slideImages = [ 
    {img: "../img/travel_one.jpg", title: "Trip & Dream", description:"Travel and Live your Dreams"},
    {img: "../img/travel_two.jpg", title: "Think Travel & Dream", description:"Travel and Live your Dreams"},
    {img: "../img/travel_three.jpg", title: "Travel & live", description:"Travel and Live your Dreams"},
    {img: "../img/travel_four.jpg", title: "Live your Dreams", description:"Travel and Live your Dreams"},
    {img: "../img/travel_five.jpg", title: "Trip, Travel & Dream", description:"Travel and Live your Dreams"},
  ]

  const createHtmlStructure = ( sliderSelector, images ) => {

    const parent = document.querySelector( sliderSelector );

    // Slides
    images.forEach( ( slideImg, index ) => {
      const { img, title, description } = slideImg;
      const slideItem = `
        <div class="item bg-cover bg-center relative" style="background-image: url('${ img }')" data-attribute="${ index }">
          <div class="absolute inset-0 bg-black opacity-50"></div>
          <div class="content absolute inset-0 flex flex-col justify-center items-center text-white">
            <div class="name text-3xl font-bold mb-2">${ title }</div>
            <div class="description text-lg mb-4">${ description }</div>
            <button class="bg-white text-black px-4 py-2 rounded">Ver más</button>
          </div>
        </div>
      `;

      const divFragment = document.createRange().createContextualFragment( slideItem );
      parent.appendChild( divFragment );
    } );

    // Buttons
    const htmlBtn = document.querySelector("#idBtn"); 
    const fragment = document.createRange().createContextualFragment(htmlBtn);
    parent.parentElement.appendChild( fragment );
    
  };

  // Initializations
  const slider = document.querySelector('#idSlider' );
  createHtmlStructure(slider, slideImages );
  
  
  // References
  const next = document.querySelector('#Next' );
  const prev = document.querySelector('#Prev' );

  // Listeners
  next.addEventListener( 'click', () => {
    const items = document.querySelectorAll( '.item' );
    slider.appendChild( items[ 0 ] );
  } );

  prev.addEventListener( 'click', () => {
    const items = document.querySelectorAll( '.item' );
    slider.prepend( items[ items.length - 1 ] );
  } );

 } )();