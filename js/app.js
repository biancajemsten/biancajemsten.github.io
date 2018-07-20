/*global TypeIt*/

console.log('js running');

$(()=>{
  // new TypeIt('#introductionText', {
  //   strings: 'Hey, I\'m Bianca',
  //   speed: 50,
  //   autoStart: true
  // });

  // get this to work?
  $('.smooth').on('scroll', function() {
    $.smoothScroll({
      scrollElement: $('body'),
      scrollTarget: '#' + this.id
    });

    return false;
  });

  $('i').on('click', function(e){
    if(this.hash !== ''){
      console.log(this.hash); 
      e.preventDefault();

      const hash = this.hash;

      $('html, body'.animate({
        scrollTop: $(hash).offset().top
      },800, function(){
        window.location.hash = hash;
      }));
    }
  });


});
