/*global TypeIt*/

console.log('js running');

$(()=>{

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

  $('li a').on('click', function(e){
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


  $('li a').mouseenter(function(){
    $(this).children(':nth-child(2)').text(`${$(this).attr('name')}`);
    $(this).children(':nth-child(2)').addClass('showNavItem');
  });
  $('li a').mouseleave(function(){
    $(this).children(':nth-child(2)').text('');
  });


  // for(let i = 0;i < $navItems.length; i++){
  //   $navItems[i].hover(function(){
  //     console.log('hover')
  //   });
  //   // $navItems[i].hover(function(){
  //   //   console.log('hovered');
  //   //   // $navItems[i].addClass('big');
  //   // });
  // }

});
