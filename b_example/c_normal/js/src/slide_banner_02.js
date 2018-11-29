(function ($) {
  //console.log('요이');

// ** jquery이용하여 슬라이드 광고배너를 만들기.
 var viewOuter = $('.view_banner_outer');
 // viewOuter.animate({marginLeft:-100+'%'});

 var viewIndi = $('.view_indicator').find('li');

  //step_01 인디케이터 버튼을 클릭하여 해당 순번의 광고로 이동하게 만들기
//기본 선택자 변수로 설정
  viewIndi.children('a').on('focus',function(e) {
    e.preventDefault();
    var  _thisP =$(this).parent();
    var  _thisI = $(this).parent().index();// index() 해당 순서 위치를 파악하는 기능 
  
    viewIndi.removeClass('action'); //해당 클래스의 이름을 가진 값을 빼준다. 
    viewIndi.eq(_thisI).addClass('action');

    console.log(_thisI);
    var _index = _thisI * 100;
    viewOuter.animate({marginLeft:-_index +'%'});
  });



//step_02 오른쪽 버튼 클릭하여 오른쪽의 광고로 이동하게 만들기
  var next = $('.next_btn');
   var slideI = 0;
  next.on('click',function(e) {
     e.preventDefault();
     slideI +=1;
     var _index = slideI * 100;
     viewOuter.animate({marginLeft:-_index +'%'});
  });
     
     var prev = $('.prev_btn');
     prev.on('click',function(e) {
       e.preventDefault();
       slideI -=1;
       var _index = slideI * 100;
       viewOuter.animate({marginLeft:-_index + '%'});
  });
      



//step_03 왼쪽버튼 클릭하여 이전광고로 이동하게 만들기



//step_04 해당광고의 끝으로 이동하면 버튼 사라지게 만들기.

 var next = $('.next_btn');
 var prev = $('.prev_btn');
 var slideI = 0;
 var liLeng = viewIndi.length-1;

  next.on('click',function(e) {
     e.preventDefault();
     slideI +=1;

     if (slideI) {}
     var _index = slideI * 100;
     viewOuter.animate({marginLeft:-_index +'%'});
  });
   
     prev.on('click',function(e) {
       e.preventDefault();
       slideI -=1;
       var _index = slideI * 100;
       viewOuter.animate({marginLeft:-_index + '%'});
  });



//step_05 인디케이터와 순서값을 연동하여 처리되게 만들기. 


})(jQuery)





