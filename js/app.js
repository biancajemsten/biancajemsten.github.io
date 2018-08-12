console.log('js running');

$(()=>{

  const profilePicture = $('#profilePicture');
  let aboutBlurb = $('.aboutBlurb');

  $(this).on('scroll', function(){
    let scrollbarLocation = $(this).scrollTop();
    if(scrollbarLocation > 120){
      aboutBlurb = $('.aboutBlurb');
      const blurbHeight = aboutBlurb.height() + $('h2').height();
      $(window).on('resize', function(){
        console.log($('h2').height());
        console.log(blurbHeight);
        profilePicture.css({
          'height': `${aboutBlurb.height()}px`,
          'bottom': `-${blurbHeight}px`
        });
      });
      profilePicture.css({
        'height': `${aboutBlurb.height()}px`,
        'bottom': `-${blurbHeight}px`,
        'left': '5vw'
      });
    } else {
      profilePicture.css({
        'height': '80vh',
        'bottom': '0px',
        'left': '0'
      });
    }
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

});
