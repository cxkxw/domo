//顶部导航手风琴效果(jquery实现)
$('.navli1').hover(function () {//移入
    $('.secnav').stop().animate({ 'height': 122 }, 800);//改变高度
}, function () {//移出
    $('.secnav').stop().animate({ 'height': 0 }, 800);
});
$('.navli2').hover(function () {//移入
    $('.secdate1').stop().animate({ 'height': 62 }, 800);
}, function () {//移出
    $('.secdate1').stop().animate({ 'height': 0 }, 800);
});
$('.navli3').hover(function () {//移入
    $('.secdate2').stop().animate({ 'height': 62 }, 800);
}, function () {//移出
    $('.secdate2').stop().animate({ 'height': 0 }, 800);
});
//banner部分的选项卡效果
$('.mainnav_dl-li').hover(function () {//移入
    $(this).attr('class', 'mainnav_dl-li on').siblings().attr('class', 'mainnav_dl-li');//给这个li添加class
    $(this).find('.mainnav_dl-li-mover').css('color', '#183b8c');//让这个li的A标签改变颜色
    $('.mainnav_dl-sub-word').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');//让对应的模块显示出来并排他
    $('.mainnav_dl-sub').css('display', 'block');
}, function () {//移出
    $(this).attr('class', 'mainnav_dl-li');
    $('.mainnav_dl-sub').css('display', 'none');
    $(this).find('.mainnav_dl-li-mover').css('color', '#fff');
});
$('.mainnav_dl-sub-word').hover(function () {//移入
    $('.mainnav_dl-sub').css('display', 'block');
    $(this).css('display', 'block').siblings().css('display', 'none');
}, function () {//移出
    $('.mainnav_dl-sub').css('display', 'none');
});
//搜索框
$('.lkn-search-input').focus(function () {
    if (this.value == '请输入商品') {
        this.value = '';
    }
});
$('.lkn-search-input').blur(function () {
    if (this.value == '') {
        this.value = '请输入商品';
    }
});
//轮播图
var swiper = new Swiper('#swiper-container', {
    autoplay: {//自动轮播
        delay: 2000,//间隔时间
        disableOnInteraction: false //拖拽完后还能继续自动轮播
    },
    loop: true,//无缝 环路
    navigation: {//上下按钮
        nextEl: 'swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {//焦点跟随
        el: '#swiper-pagination',
        clickable: true,//点击焦点跳到指定图片
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';//生成焦点数字
        }
    },
    mousewheel: true//滚动滑轮可以切图
    // effect: 'cube'//选用:效果
});

var oBox = document.getElementById('swiper-container');
oBox.onmouseover = function () {//鼠标经过停止
    swiper.autoplay.stop();
}
oBox.onmouseout = function () {//鼠标离开就运动
    swiper.autoplay.start();
}
//首页宝贝选项卡
$('.eShop_content_pp').on('mouseover', '.li1', function () {
    $(this).attr('class', 'curList').siblings().attr('class', 'li1');
    $('.eShop_content_ppCon').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
});
$('.eShop_content_pp').on('mouseover', '.li2', function () {
    $(this).attr('class', 'curList').siblings().attr('class', 'li2');
    $('.eShop_content_ppCon1').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
});
$('.eShop_content_pp').on('mouseover', '.li3', function () {
    $(this).attr('class', 'curList').siblings().attr('class', 'li3');
    $('.eShop_content_ppCon2').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
});
//轮播图
var sp = new Swiper('.swiper-container1', {
    autoplay: {//自动轮播
        delay: 2000,//间隔时间
        disableOnInteraction: false //拖拽完后还能继续自动轮播
    },
    loop: true,//无缝 环路
    pagination: {//焦点跟随
        el: '.swiper-pagination1',
        clickable: true,//点击焦点跳到指定图片
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';//生成焦点数字
        }
    },
    mousewheel: true//滚动滑轮可以切图
    // effect: 'cube'//选用:效果
});

var oBox1 = document.getElementsByClassName('swiper-container1')[0];
oBox1.onmouseover = function () {//鼠标经过停止
    sp.autoplay.stop();
}
oBox1.onmouseout = function () {//鼠标离开就运动
    sp.autoplay.start();
}

//回到顶部,如果滚动的距离已经超过一屏(window.innerHeight)，就让回到顶部的按钮出现，点击减速回到顶部
$(document).ready(function () {
    var ScrolltoTop = $(".lkn-sidebar-backtop");
    // $(ScrolltoTop).hide();//隐藏
    $(window).scroll(function () {//滚动事件
        if ($(window).scrollTop() == "0") {//相对滚动顶部的偏移量
            // $(ScrolltoTop).fadeOut("slow")//淡出
            $(ScrolltoTop).css('display', 'none');
        } else {
            // $(ScrolltoTop).fadeIn("slow")//淡入
            $(ScrolltoTop).css('display', 'list-item');
        }
    });
    $(ScrolltoTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700)
    })
});
//登录成功状态
function updata() {
    let data = getcookie('username');
    if (data) {
        $('.welcome').html(data + ' 欢迎来到批发户');
        $('.login').html('退出');
        $('.login').attr('class', 'quit');
    } else {
        $('.welcome').html('欢迎来到批发户');
        $('.login').html('登录');
        $('.login').attr('class', 'login');
    }
}
updata();
//退出功能
$('.topnav_left li').on('click', function () {
    if ($(this).find($('a')).html() == '退出') {
        removeCookie('username');
        removeCookie('url');
    } else if ($(this).find($('a')).html() == '登录') {
        location.href = 'login.html';
    }
    updata();
});
