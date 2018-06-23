(function(){
    //导航点击事件
    (function(){
        var $oLi = $("#nav .n-main ul");
        $oLi.on("click","li",function () {
            $(this).addClass("active").siblings().removeClass("active");
        })
    })();
    //banner轮播
    (function(){
        var $bg = $("#h-bg p");
        var $tab = $("#h-tab div");
        var length= $bg.length;
        var index = 0;
        var timer;
        $tab.click(function () {
            if( $(this).index() === index )return;
            clearInterval(timer);
            auto();
            $bg.eq(index).fadeOut();
            $tab.eq(index).removeClass("active");
            index = $(this).index();
            $bg.eq(index).fadeIn();
            $tab.eq(index).addClass("active");

        });
        auto();
        function auto() {
            timer=setInterval(function () {
                $bg.eq(index).fadeOut();
                $tab.eq(index).removeClass("active");
                index ++;
                index %= length;
                $bg.eq(index).fadeIn();
                $tab.eq(index).addClass("active");
            },3000)
        }

    })();
    //speaker金牌讲师
    (function(){
        var $speaker = $("#speaker .s-c-img ul");
        var $btn = $("#speaker .s-c-arrow p");
        var length = data.length;
        var html= "";
        for (var i = 0; i < length; i++) {
            var d = data[i];
            html += "<li style='background-image: url("+d.src+")'>" +
                "<div class='txt'>" +
                "<h5>"+d.name+"</h5>"+
                "<p class='pos'>"+d.title+"</p>"+
                "<p class='summary'>"+d.dec+"</p>"+
                "</div>"+
                "</li>"
        }
        $speaker.append(html);
        //左右点击
        (function(){
            var MaxLength= length - 4;
            var index = 0;
            var $speakerList = $speaker.find("li").outerWidth(true);
            var time = new Date();
            function fn(index) {
                var arr = [];
                if( index === 0 ){
                    arr = ["hide","show"];
                }else if( index < MaxLength ){
                    arr = ["show","show"];
                }else{
                    arr = ["show","hide"];
                }
                $btn.eq(0)[arr[0]]();
                $btn.eq(1)[arr[1]]();
            }
            fn(index);
            $btn.click(function () {
                if( new Date() - time <=600)return;
                time= new Date();
                index +=($(this).index()? 2:-2);
                index = Math.min(MaxLength,index);
                index = Math.max(0,index);
                fn(index);
                // $speaker.animate({
                //     marginLeft: -index * $speakerList
                // },500);
                $speaker.css("margin-left",-index * $speakerList);
            });
        })();

    })();
    //选项卡
    (function(){
        var $tab = $("#works .w-m-c-tab ul li");
        var $works = $("#works .w-m-c-works ul");
        $tab.click(function () {
           $(this).addClass("on").siblings().removeClass("on");
           $works.eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
        })
    })();
})();