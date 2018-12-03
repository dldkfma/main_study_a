(function($) {
  console.log('jquery가 동작합니다.');

  var wrap = $('#wrap');
  var unit = 60;
  wrap.css({width:60 + 'rem', minHeight:30 + 'rem', backgroundColor:'#ccc', margim:'auto'}); //'rgba(' + 255 +',' + 255 + ',' + 255 + ',' + 0.5 + ')'


  // headBox{margin:auto; width:80%; height: auto; text-align:center; background-color:#059; color:#fff; padding-bottom:1rem; border-bottom:0.2rem solid #fff;}

  $('#headBox').css({margin:'auto', width:80 +'%',height:'auto', textAlign:'center', backgroundColor:'#059', color:'#fff', paddingBottom:'1rem', borderBottom:0.2 + 'rem solid #fff'}); 

  var listBox = $('#list');
  var listOuter = listBox.children('ul');
  var listLi = listOuter.children('li');
  // var listLi2 = listBox.find('li');
  var full = 100 + '%';



  listBox.css({margin:'auto', width:full, height:'auto', backgroundColor:'#acf'});

  listOuter.css({width:full, height:'auto', padding: 5.25+'rem ', boxSizing:'border-box', backgroundColor:'#fa0'});


  listLi.css({width:full, height:'2.5rem', textAlign:'center', paddingTop:0.5+'rem', borderBottom:'0.2rem solid #333'});

  //listOuter.children('li:nth-child(1)').css({backgroundColor:'#4af'})
  //listOuter.children('li:nth-child(2n)').css({backgroundColor:'#8a1'})
  //listOuter.children('li:nth-child(3)').css({backgroundColor:'#4f4'})
  //listOuter.children('li:nth-child(5)').css({backgroundColor:'#88f'})

  listOuter.children('li').eq(1).css({backgroundColor:'#faf'})
  listOuter.children('li').eq(2).css({backgroundColor:'#8a1'})
  listOuter.children('li').eq(3).css({backgroundColor:'#4f4'})
  listOuter.children('li').eq(4).css({backgroundColor:'#88f'})


  //=============================================================================================
  
  var color1 = ['#fff', '#ccc', '#acf', '#f06', '#47a'];
  var i =0;
  for(; i<=4; i+=1){listLi.eq(i).css({backgroundColor:color1[i]});
}




//jquerry 선택자 

//직접 선택하는 방법 , id,class, $()

// -$('div');,$('#box');, $('.box');, $('div>ul a');

//메소드를 활용하는 방법 children,find
// -$('div>ul a');,
//$('div').children('ul');
//,$('div').find('a');

//순서를 선택하는 방법  eq
//-$('li').eq(1) //순서는 처음이 0 (css에서는 1부터 )

// 부모를 선택하는 방법 parent() parentsUntil  
// ('#wrap').parent()

// 형제를 선택하는 방법 siblings, next, prev 


})(jQuery);