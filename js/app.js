/*global TypeIt*/

console.log('js running');

$(()=>{
  new TypeIt('#introductionText', {
    strings: 'Hey, I\'m Bianca',
    speed: 50,
    autoStart: true
  });


  $('.smooth').on('scroll', function() {
    $.smoothScroll({
      scrollElement: $('body'),
      scrollTarget: '#' + this.id
    });

    return false;
  });


});
