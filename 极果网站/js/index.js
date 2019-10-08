/**热门试用 轮播js**/
// 自动轮播

var time = null;
time =  setInterval(run,1000);
 function run() {  
  
   $('.hot_box_wrap ul').animate({
      "marginLeft": -4*li_wid+"-102px"
  }, 2000, function () {
      $('.hot_box_wrap ul').css('marginLeft', '0px');
      $('.hot_box_wrap ul li').slice(0, 4).appendTo($('.hot_box_wrap ul'));
  });
}

var li_wid = $('.hot_box_wrap ul li').innerWidth();
 
console.log(li_wid);
//点击事件
$('#right').on('click', function () {
    $('.hot_box_wrap ul').animate({
        "marginLeft": -4*li_wid+"-102px"
    }, 500, function () {
         $('.hot_box_wrap ul').css('marginLeft', '0px');
   $('.hot_box_wrap ul li').slice(0, 4).appendTo($('.hot_box_wrap ul'));
    });
 });

//点击事件
 var isrun = true;
 $('#left').on('click', function () {
    if (isrun) {
        isrun = false;
       $('.hot_box_wrap ul').css('marginLeft', -4*li_wid+"-102px");
        $('.hot_box_wrap ul li').slice(-4).prependTo($('.aa'));

       $('.hot_box_wrap ul').animate({
       'marginLeft': '0px'
    }, 500, function () {
            isrun = true;
         });

    }


 });
 // 点击返回顶部
$('.seven img').on('click',function(){
   document.documentElement.scrollTop=0;
   console.log(document.documentElement.scrollTop);
})
 //鼠标悬停事件
//  $("#left").hover(function () {
//        // over
//        clearInterval(time)
       
//     }, function () {
//        // out
//        setInterval(run,3000)
//     }
//  );

//  $("#right").hover(function () {
//    // over
//    clearInterval(time)
   
// }, function () {
//    // out
//    setInterval(run,3000)
// }
// );



// 点击加载跟多
$(".load").click(function () {
   $(".load").hide();
    
   $(".change").show();



  })




//   注册

/**表单验证是否密码相同**/
function check(form){
   var p1 = form.psw1;
   var p2 = form.psw2;
   if (p1.value != p2.value) {
      p2.oninvalid();
      return false;
   }
   return true;
}

window.onload = function() {
   var p2 = document.forms["my_f1"].psw2;
   p2.oninvalid = function() {
      this.setCustomValidity("密码不一致，请重新输入");
   }
   p2.oninput = function() {
      this.setCustomValidity("");
   }

}

$(function(){
   /**获取验证码 倒计时**/
   var wait = 60;
   function yzm(){
      if(wait==0){
         $(".getCode").text("获取验证码");
         wait = 60;
      }else{
         wait--;
         $(".getCode").text(wait+"秒后重新发送");
         setTimeout(function(){yzm();},1000);
      }
   }
   $(".getCode").click(function(){
      yzm();
   });
});


