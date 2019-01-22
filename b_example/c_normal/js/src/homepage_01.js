

(function($){
//기능 1 :header기능이 스크롤 처리해 상단에 올라오면 position:fixed 처리
var win = $(window);
var headBox = $('#headBox');
var headOffset = headBox.offset().top;
var headCon = headBox.find('.container');
var gnb = headBox.find('#gnb');
//var headDd = headBox.find('dd');

var winH =  win.height();
var scrollOffset = 0;

// 스크롤 처리시 
win.on('scroll',function(e){

//스크롤이 얼만큼 움직였는지 파악	
var scrollOffset = $(this).scrollTop();

// 스크롤 양과 headOffset의 크기값을 비교하여 처리 
var vs = headOffset <= scrollOffset;


if (vs) {
	headBox.css({position:'fixed',top:0,bottom:'auto'});


}else{
	headBox.removeAttr('style');
}

//화면의 전체 높이를 기준으로 절반 아래로 헤더가 있으면 위로하위메뉴 나타나게 만들기
var heightVs = scrollOffset < winH/2;

if(heightVs){
	//true인경우
	headCon.addClass('up');


}else{
      headCon.removeClass('up');
	//false인경우
}

});

//기능1의 2번째 처리: header메뉴에 마우스 올리거나 포커스었을때 하위메뉴는 어떻게 나타나야 하는가?


var addView = function(e){
	e.preventDefault();
	headCon.addClass('view');
};


var removeView = function(e){
	e.preventDefault();
	headCon.removeClass('view');
};

gnb.on({'mouseenter' : addView , 'mouseleave' : removeView});




//2번째 처리시부차적 문제: header의 위치가 하단에 있는 경우와 상단에 있는 경우에 따라,
// 하위메뉴는 보이는 형태가 어떻게 나타나야 하는가?

// 전체를 기준으로 봐야하는데 이 전체는 어느 크기일까? ($(window).height)





// adbanner영역의 구성을 변경.(기존의 개수엣 마지막 하나를 복제하여 앞에 배치.)
var viewBannerLast = viewBannerList.eq(-1).clone(true);
//viewBannerList.eq(0).before(viewBannerLast);
viewBannerLast.prepend(viewBannerLast);

//내용 변경 후 갯수를 다시 파악
viewBannerList = viewBannerchildren('li');
// 감싸는 영역의 크기를 갯수 * 100% 크기만큼으로 변경. 
var len = viewBannerList.length;
console.log(len);


viewBanner.css({width: len * 100 + '%', marginLeft: -})


// 첫번째 보이는 요소는 첫배너로 처리하기위해 전체를 왼쪽으로 이동.
// css문서에서 nth로 배경이미지를 처리하면 안된다. 각각의 네임을 부여해 처리하는 것이 원칙.


var banner = $('#adBanner');
var viewOuter = banner.find('view_outer');
var viewBanner = viewOuter.find('ul');
var viewBannerList = viewBanner.children('li');




//인디케이터





// 좌,우 버튼을 클릭하든 인디케이트를 클릭하든 공통의기능을 하는 변수가 하나 필요.
var showI = 0;
viewBanner.css({marginLeft: showI * -100 + '%' });


//좌,우 버튼 클릭시



// 일정시간마다 자동으로 순환하는 기능을 만들기.
//왼버튼 클릭시 showI -= --> -1의었던 아이를 leng-2의 수치로 변경하여 해당위치로 이동하게 만들자.   


//clearInterval(function(){}); //setInterval을 강제로 멈추게 하는 함수.


prevBtn.on('click',function{
preventDefault();
if(showI <= 0){
	showI = -1;
}else{
showI  -= 1;
SlideBanner(showI);
}




});



var news = $('.news');
  var newsCon = news.children('.container');
  // var newsList = $('.news_list');
  var newsList = '<div class="news_list"><a href="#"><div class="img_list"></div><dl><dt>title</dt><dd>content</dd></dl></a></div>';


  // 링크,  사진, 제목, 내용
var newsArray = [
    {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
    {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
    {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
    {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
    {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
    {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
    {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
    {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"}
  ];

  // newsCon.append(newsList);
 var i = 0, list;
  for (; i < newsArray.length ; i += 1){
    newsCon.append(newsList);

    list = $('.news_list').eq(i);
    list.find('a').attr({'href': newsArray[i].link});
    list.find('.img_list').css({'backgroundImage': 'url(' + imgUrl + newsArray[i].pic +')'});
    list.find('dt').text( newsArray[i].tit );
    list.find('dd').text( newsArray[i].con );
};








})(jQuery);