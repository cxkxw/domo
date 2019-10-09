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
//二级导航
$('.navdt').hover(function () {
    $(this).find('a').attr('class', 'hover');
    $(this).find('i').css('color', '#FFF');
    $('.navdd').css('display', 'block');
}, function () {
    $('.navdd').css('display', 'none');
    $(this).find('a').attr('class', '');
    $(this).find('i').css('color', '#bc338b');
});
$('.navdd').hover(function () {
    $(this).css('display', 'block');
    $('.navdt a').attr('class', 'hover');
    $('.navdt i').css('color', '#FFF');
}, function () {
    $(this).css('display', 'none');
    $('.navdt a').attr('class', '');
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