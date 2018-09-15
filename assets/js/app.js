/*
 Template Name: Upcube - Bootstrap 4 Admin Dashboard
 Author: Themesdesign
 Website: www.themesdesign.in
 File: Main js
 */

!function ($) {
    "use strict";

    var MainApp = function () {
        this.$body = $("body"),
            this.$wrapper = $("#wrapper"),
            this.$btnFullScreen = $("#btn-fullscreen"),
            this.$leftMenuButton = $('.button-menu-mobile'),
            this.$menuItem = $('.has_sub > a')
    };
        MainApp.prototype.Preloader = function () {
            $(window).load(function() {
                $('#status').fadeOut();
                $('#preloader').delay(350).fadeOut('slow');
                $('body').delay(350).css({
                    'overflow': 'visible'
                });
            });
        },
        MainApp.prototype.Move = function (className, number){
            var oSpan=document.getElementsByClassName(className);
            var d=number;//跳动到最后的数字
            var s= parseInt(oSpan[0].innerHTML);//起始起始值 一般是 0 或其他
            var time=1000;  //所用时间 1000毫秒（ 在1秒内 数值增加到d）;
            var outTime=0;  //所消耗的时间
            var interTime=10;
            var timer = setInterval(function(){
                outTime+=interTime;
                if(outTime<time){
                    oSpan[0].innerHTML= parseInt(d/time*outTime);
                }else{
                    oSpan[0].innerHTML=d;
                }
                },interTime);
            },
        MainApp.prototype.init = function () {
            this.Preloader();
            this.Move('counter-01', 213243);
            this.Move('counter-02', 87541);
            this.Move('counter-03', 106);
            this.Move('counter-04', 40);
        },
        //init
        $.MainApp = new MainApp, $.MainApp.Constructor = MainApp
}(window.jQuery),

//initializing
    function ($) {
        "use strict";
        $.MainApp.init();
    }(window.jQuery);

