/*global TypeIt*/

console.log('js running');

$(()=>{
  // const $navItems = querySelectorAll('li');

  // new TypeIt('#introductionText', {
  //   strings: 'Hey, I\'m Bianca',
  //   speed: 50,
  //   autoStart: true
  // });

  // get this to work?
  $('.smooth').on('scroll', function() {
    console.log('scroll');
    $.smoothScroll({
      scrollElement: $('body'),
      scrollTarget: '#' + this.id
    });

    return false;
  });


  $('i.fa-angle-down').on('click', function(e){
    if(this.hash !== ''){
      e.preventDefault();
      const link = $(this).attr('href');

      $('html, body').animate({
        scrollTop: $(link).offset().top
      },800, function(){
        window.location.id = link;
      });
    }
  });


  //theme changer
  // for(let i = 0;i < $navItems.length; i++){
  //   $navItems[i].addEventListener('hover', function(){
  //     $navItems[i].addClass('')
  //   });
  // }

});
