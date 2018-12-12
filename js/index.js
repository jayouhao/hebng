//JS代码来判断：屏幕宽度 < 屏幕高度时，即竖屏，就让页面.lingan_1元素横屏显示
// const width1 = document.documentElement.clientWidth; //获取当前手机屏宽
// const height1 = document.documentElement.clientHeight; //手机褡高
// console.log(width1,height1);
// if(width1<480){
//     var doms=document.getElementsByClassName("lei_ming")[0];

//     doms.style.width=height1+"px";
//     doms.style.height=width1+"px";
// }





var width = document.documentElement.clientWidth;
  var height =  document.documentElement.clientHeight;
  if( width < height ){
      console.log(width + " " + height);
      $print =  $('#print');
      $home=$("#home");
      $home.width(height);
       $home.height(width);
      $print.width(height);
       $print.height(width);
      $print.css('top',  (height-width)/2 );
      $print.css('left',  0-(height-width)/2 );
      $print.css('transform' , 'rotate(90deg)');
       $print.css('transform-origin' , '50% 50%');       
       
 }





