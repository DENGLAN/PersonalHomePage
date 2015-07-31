/**
 * Created by DL on 2015/7/30.
 */
Viwepager("js-content","js-contentUl","js-contentBut1","js-contentBut2","js-contentImg",
    ['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png']);

$(function(){
    $(".js_nav").on("click",function(){
        var name = $(this).attr("name");   //寻找点击的元素 对应部分的ID
        $("html,body").animate({scrollTop:$("#"+name).position().top-92});   //让body滚动条距离顶部的距离 ==点击元素对应部分距离顶部距离
    });

    $("#BackTop").on("click",function(){
        $("html,body").animate({scrollTop:0});   //回到顶部
    })
});

