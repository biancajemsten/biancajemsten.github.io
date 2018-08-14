console.log('js running');

$(()=>{
  const $profilePicture = $('#profilePicture');
  const $aboutBlurb = $('.aboutBlurb');
  const $logo = $('.logo');
  const $experienceTitles = $('.experienceTable h6');
  const $panels = $('.panel');

  //Portfolio functions
  function toggleOpen() {
    this.classList.contains('open') ? this.classList.remove('open') :  $panels.removeClass('open') && this.classList.add('open');
  }

  function toggleActive() {
    this.classList.toggle('open-active');
  }

  $panels.each(function() {
    $(this).on('click', toggleOpen);
  });

  $panels.each(function() {
    $(this).on('transitionend', toggleActive);
  });

  //experience functions
  function experienceSelection(){
    $experienceTitles.each(function() {
      $(this).on('click', () => {
        $experienceTitles.removeClass('active');
        $(this).addClass('active');
        $('.experienceDetail').css('display', 'none');
        const id = $(this).attr('name');
        $(`#${id}`).css('display','block');
      });
    });
  }

  experienceSelection();
  console.log($('h2').offset().top);
  console.log($aboutBlurb.offset().top + $aboutBlurb.height());


  let $aboutPageHeight = ($aboutBlurb.offset().top + $aboutBlurb.height())- ($('h2').offset().top);

  console.log({$aboutPageHeight});

  //homePage functions
  $(this).on('scroll', function(){
    let scrollbarLocation = $(this).scrollTop();
    if(scrollbarLocation > 120){
      const $blurbHeight = $aboutBlurb.outerHeight() + $('h2').outerHeight();
      $(window).on('resize', function(){
        $aboutPageHeight = ($aboutBlurb.offset().top + $aboutBlurb.height())- ($('h2').offset().top);
        $profilePicture.css({
          'height': `${$aboutBlurb.height()}px`,
          'bottom': `-${$aboutPageHeight}px`
        });
      });
      $profilePicture.css({
        'height': `${$aboutBlurb.height()}px`,
        'bottom': `-${$aboutPageHeight}px`,
        'left': '5vw'
      });
    } else {
      $profilePicture.css({
        'height': '80vh',
        'bottom': '0px',
        'left': '0'
      });
    }
    let contactLocation = $('#contact').offset().top - ($('#contact').height()/4);

    if(scrollbarLocation > contactLocation){
      $logo.css({
        'height': '40vh',
        'left': '15vw',
        'bottom': '30vh'
      });
    }else{
      $logo.css({
        'height': '10vh',
        'left': '10px',
        'bottom': '10vh'
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
