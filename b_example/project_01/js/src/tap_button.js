(function($){

// tmzmfhf 1000px기준으러 이하일 경우 사라지고, 초과할 시에 나타나게 만들기


var topBtn = $('.top_btn');

var st = $(window).scrollTop();

var scrollView = function(){
    st = $(window).scrollTop();
if (st <= 1000 ){topBtn.fadeOut(); }else{topBtn.fadeIn(); }
};

scrollView();

$(window).on('scroll', function(){
  
scrollView();

});





})(jQuery);