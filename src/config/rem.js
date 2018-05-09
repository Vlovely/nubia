// (function(doc,win){
//     //针对设备做处理
//     var docEl=doc.documentElement,
//     resize='orientationchange' in window?'orientationchange':'resize'
//     var change=function(){
//         var clientwidth=doc.clientWidth
//         if(!clientwidth)return
//         docEl.style.fontSize=20*(clientwidth/320)+'px'
//         console.log(docEl.style.fontSize)
//     }
//     change()
//     win.addEventListener(resize,change,false)
//     // DOMContentLoaded 浏览器内部加载执行
//     doc.addEventListener('DOMContentLoaded',change,false)
// })(document,window)

(function(doc,win){
    var docEl=doc.documentElement,
    resize='onorientationchange' in window?'orientationchange':'resize',
    oBody=document.querySelector('body');
   // console.log(oBody)
    
    var recal=function(){
      
      var clientWidth=docEl.clientWidth;
      
      if(!clientWidth) return;
      if(clientWidth>640){
       clientWidth=640;
       
      }else if(clientWidth<320){
       clientWidth=320
      }
      
      docEl.style.fontSize=clientWidth/6.4+"px";
    }
    recal();
    if(!doc.addEventListener) return;
   //  处理移动端打开的状态
    window.addEventListener(resize,recal,false);
   //  处理浏览器打开的状态
    doc.addEventListener('DOMContentLoaded',recal,false)
    
  })(document,window);
