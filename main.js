// Menu toggle

$('.menu-toggle').on('click', function() {
    $('.menu').toggleClass('open')
  
    return false
  })
  
  // Hover
  document.addEventListener('mousemove', function(event) {
    const x = event.pageX
    const y = event.pageY
  
    document.querySelectorAll('section.home div').forEach(div => {
      const dx = div.offsetLeft + 50 - x
      const dy = div.offsetTop + 50 - y
      const dist = Math.sqrt(dx * dx + dy * dy)
  
      const score = Math.exp(dist * -0.003)
  
      div.style.transform = 'scale(' + score + ')'
      div.style.fontWeight = 100 + 100 * Math.floor(8 * score)
    })
  })
  
  
  // Scroll
  
  $(document).on('scroll', function() {
    //the scrollTop method gives us back a pixel value for how far it is to the top of the page (from our scroll position)
    var pixelsFromTop = $(document).scrollTop()
  
    if (pixelsFromTop > 50) {
      $('header').addClass('hidden')
    } else {
      $('header').removeClass('hidden')
    }
  
    if (pixelsFromTop < 1500) {
      $('body').css('background-color', '#fff')
    } else if (pixelsFromTop < 1400) {
      $('body').css('background-color', '#a29c97')
    } else if (pixelsFromTop < 2200) {
      $('body').css('background-color', '#d9dfe4')
    } else if (pixelsFromTop < 3000) {
      $('body').css('background-color', '#fff0f0')
    } else {
      $('body').css('background-color', '#cdccc7')
    }
  
  
    //1.makes some variables for our documentHeight and windowHeight
    //2. make a variable to work out the different bewtween the two (as we are comparing this to our scrollTop position which goes from the top of the window). so it will be documentHeight - windowHeight
    //3.using the different and the scrollPosition, divide them into each other to make a percantage
    //4. multiply by 100 to get back a % value
  
    var documentHeight = $(document).height()
    var windowHeight = $(window).height()
  
    var difference = documentHeight - windowHeight
  
    var percentage = 100 * pixelsFromTop / difference
  
    console.log(percentage)
    
      //here we join the number of % scrolled with the % symbol (otherwise it assumes we're talking about pixels)
  
    $('.bar').css('width', percentage + '%')
    
  })
  
  