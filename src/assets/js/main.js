  const firstListItem = document.querySelector('.fir');
    const secondListItem = document.querySelector('.sec');
    const thirdListItem = document.querySelector('.thir');
    const plan1 = document.querySelector('#one');
    const plan2 = document.querySelector('#two');
    const plan3 = document.querySelector('#three');
    
    firstListItem.addEventListener('click', (e) => {
        e.preventDefault()
        plan1.classList.toggle('d-block')
        
    });

    secondListItem.addEventListener('click', (e) => {
        e.preventDefault()
        secondListItem.classList.toggle('active')
        plan2.classList.toggle('d-block')
    });

    thirdListItem.addEventListener('click', (e) => {
        e.preventDefault()
        thirdListItem.classList.toggle('active')
        plan3.classList.toggle('d-block')
    });

    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
    // options
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        prevNextButtons: false,
        autoPlay: 1500,
        lazyLoad: true
    });

    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });