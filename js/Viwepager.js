/**
 * Created by DL on 2015/7/30.
 */
function Viwepager(DivId,UlId,FButId,SButId,ImgId,ArrImg){
    var oUl = document.getElementById(UlId);
    var oDiv = document.getElementById(DivId);
    var oImg = document.getElementById(ImgId);
    var oBut1 = document.getElementById(FButId);
    var oBut2 = document.getElementById(SButId);
    var Aimg =ArrImg;
    var oldColorLi =null;
    var number = 0;
    var lunBoTime = null;
    //添加与图片数量相等的li
    for(var i=0;i<Aimg.length;i++){
        oUl.innerHTML+="<li></li>";
    }
//找到UL下的所有LI
    var oLi = oUl.getElementsByTagName("li");
    //    初始化设置UL  button 的位置
    oUl.style.left = (parseInt(getStyle(oDiv,"width")) - parseInt(getStyle(oUl,"width")))/2+'px';
    oBut1.style.top = (parseInt(getStyle(oDiv,"height")) - parseInt(getStyle(oBut1,"height")))/2-90+'px';
    oBut2.style.top = (parseInt(getStyle(oDiv,"height")) - parseInt(getStyle(oBut2,"height")))/2-90+'px';
//初始化图片
    oImg.src=Aimg[number];
    oldColorLi = oLi[number];
    oldColorLi.className = "BackBlack";

//循环给li添加事件
    for(var i=0;i<oLi.length;i++){
        oLi[i].index = i;
        oLi[i].onclick = function(){
            clearInterval(lunBoTime);  //执行点击事件时清楚定时器
            number=this.index;
            oldChange();
        }
    }
    //    点击button1 添加事件
    oBut1.onclick = function(){
        clearInterval(lunBoTime);   //执行点击事件时清楚定时器
        number--;
        if(number==-1){
            number=Aimg.length-1;
        }
        oldChange();
    };
    //    点击button2  添加事件
    oBut2.onclick = function(){
        clearInterval(lunBoTime);   //执行点击事件时清楚定时器
        number++;
        if(number==Aimg.length){
            number=0;
        }
        oldChange();
    };
//    自动轮播 函数
    function lunbo(){
        clearInterval(lunBoTime);  //执行定时器前必须清楚定时器
        lunBoTime = setInterval(function(){
            number++;
            number%=Aimg.length;
            oldChange();
        },2000);
    }
//调用函数  执行定时器
    lunbo();
//鼠标移开ul button 后继续执行自动轮播
    oUl.onmouseout = lunbo;
    oBut1.onmouseout = lunbo;
    oBut2.onmouseout = lunbo;
//通过类名  BackBlack 的添加删除控制LI的背景色  ，通过number控制img中的SRC
    function  oldChange(){
        oldColorLi.className = "";
        oldColorLi = oLi[number];
        oldColorLi.className = "BackBlack";
        oImg.src=Aimg[number];
    }
//封装函数获得元素的单一样式
    function getStyle(obj,attr){
        return  obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr]
    }
}