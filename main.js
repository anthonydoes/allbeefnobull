$('body').append('<div style="" id="loadingDiv" class="loadingContainer"><div class="loader">Loading...</div></div>');
$(window).on('load', function(){
  setTimeout(removeLoader, 1000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).remove(); //makes page more lightweight 
  });  
}

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
  
  // smooth scrolling

const scrollLinks = document.querySelectorAll('.js-scroll')
scrollLinks.forEach(link => {

  link.addEventListener('click', () => {
 
    event.preventDefault()
    
   const href = link.getAttribute('href')
   console.log(href)
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth' 
    })
  })
})



  