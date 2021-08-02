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
  
  
  