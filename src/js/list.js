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

$('.all').on('click', function (ev) {
    if ($('.select').css('display') == 'none') {
        $(this).css('border', '1px solid #bc338b');
        $('.select').show();
    } else {
        $(this).css('border', '1px solid #8e8e8e');
        $('.select').hide();
    }
    ev.stopPropagation();
});
$('body').on('click', function () {
    $('.all').css('border', '1px solid #8e8e8e');
    $('.select').css('display', 'none');
});

$('.lknbox-menu li').on('click', function () {
    $(this).attr('class', 'on').siblings().attr('class', '');
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
//渲染列表页到页面
let ipage = 1;
let num = 20;
let val1 = '';
let val2 = '';
let paixu = '';
let isture = true;
function innt() {
    $.ajax({
        type: 'get',
        url: '../api/getdata.php',
        data: {
            ipage,
            num,
            val1,
            val2,
            paixu
        },
        success: str => {
            caret(str);
        }
    });
    function caret(str) {
        let arr = JSON.parse(str);//将字符串转成数组[{},{},{}]
        console.log(arr);
        let shtml = arr.list.map(item => {
            let imgs = item.imgurl.split('&');
            imgs.pop();//删除数组最后一个空格
            let str1 = '';
            for (var i in imgs) {
                str1 += `<li><img class="smpic" src="${imgs[i]}" alt=""></li>`;
            }
            return `<div class="boxlist">
                        <img src="${imgs[0]}" data-id="${item.gid}"
                            alt="" class="bigimg">
                        <ul class="smallimg clearfix">
                           ${str1}
                        </ul>
                        <div class="cont">
                            <div class="list-price clearfix">
                                <a href="">批发：￥${item.pfprice}</a>
                                <span class="cj">成交额￥${item.chenjiaoe}</span>
                            </div>
                            <a href="###" class="title">${item.title}</a>
                            <div class="list-add clearfix">
                                <a href="###" class="add-data"><i class="iconfont icon-shujubao"></i>数据包</a>
                                <a href="###" class="add-receipt">加入进货单</a>
                            </div>
                            <div class="list-state">
                                <span class="market">现货销售</span>
                                <span class="time">${item.timer}</span>
                            </div>
                        </div>
                    </div>`;
        }).join('');
        $('.lknbox-list').html(shtml);
        let sum = Math.ceil(arr.total / num);
        let astr = '';
        for (let i = 0; i < sum; i++) {
            astr += `<a href="###">${i + 1}</a>`;
        }
        $('.ipage').html(astr);
        let pages = document.querySelector('.ipage');
        pages.children[ipage - 1].className = 'curr';
        //点击页码渲染相应的内容到页面中
        $('.ipage a').on('click', function () {
            ipage = $(this).html();
            innt();
        });
        //当鼠标移入哪个小图的时候哪个小图就高亮显示
        $('.smallimg li').hover(function () {
            $(this).attr('class', 'active').siblings().attr('class', '');
            let src = $(this).children().attr('src');
            $(this).parent().prev().attr('src', src);
        })
        //点击哪个宝贝的图片就把对应的宝贝id传到详情页
        $('.bigimg').on('click', function () {
            window.open('details.html?' + 'gid=' + $(this).data("id"));
        });
    }
}
innt();
//点击价格从高到低的时候按照价格降序排序
let asca = document.querySelector('.lkn-price');
console.log(asca);

asca.onclick = function () {
    if (isture) {
        paixu = 'desc';
    } else {
        paixu = 'asc';
    }
    ipage = 1;
    innt();
    isture = !isture;
}
//价格区间
let btn = document.querySelector('.btn-price');
let text1 = document.querySelector('.min-price');
let text2 = document.querySelector('.max-price');
btn.onclick = () => {
    ipage = 1;
    val1 = text1.value;
    val2 = text2.value;
    innt();
    text1.value = '';
    text2.value = '';
}