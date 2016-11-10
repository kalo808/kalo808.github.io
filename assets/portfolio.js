


$('.more-info').click(function(){
  $(this).parent().parent('.card').toggleClass('flipped');
});


$('.back-button').click(function(){
  $(this).parent().parent('.card').toggleClass('flipped');
});

$('.more-info').click(function(){
  $(this).parent().parent().parent('.web').css('height',480);
});

$('.back-button').click(function(){
  $(this).parent().parent().parent('.web').css('height',320);
});