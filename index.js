if (process.env.NODE_ENV !== 'production') {
  require('./src/index.html');
  require('./src/styles/style.scss');
}




$(document).ready(function() {

  /*function for slide animation */
  //add css transition after page load
  $('.slide').css('transition', '1s');

  //grab all icons
  const icons = document.querySelectorAll('.icons div');

  //add eventlistner to each icon
  icons.forEach(function(icon){icon.addEventListener('click', update)});

  function update(e){
    //loop and hide all slides
    const slides = document.querySelectorAll('.slide')
    slides.forEach(function(slide) {
      slide.style.setProperty('opacity', '0');
    })
    //show selected
    const slide = document.querySelector('.'+this.dataset.slide);
    console.log(slide);
    slide.style.setProperty('opacity', '1');
  }


/*function for scroll to sections */
 // const scrollToHome = $('#sec1');
 // const scrollToCapture = $('#sec2');
 // const scrollToCollaborate = $('#sec7');
 // const scrollToConnect = $('#sec9');
 const container = $('html,body');

  const boxes = document.querySelectorAll('.boxes');

  boxes.forEach(function(box){
    box.addEventListener('click', scroll);
  })

  function scroll(e){

    console.log(this.dataset.anchor)

    const scrollTo = $('#sec'+this.dataset.anchor)
      console.log(scrollTo)
    container.animate({
        scrollTop: scrollTo.offset().top


    });
  }

// container.animate({
//     scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
// ;})

})

