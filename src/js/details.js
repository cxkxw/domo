$('.fashion').hover(function () {
    $(this).attr('class', 'aon');
    $(this).find('p').css('display', 'block')
}, function () {
    $(this).attr('class', '');
    $(this).find('p').css('display', 'none')
});
$('.hd li').on('click', function () {
    $(this).attr('class', 'on').siblings().attr('class', '');
    let iw = $(this).index() * 100 + 'px';
    $('.hd-arrow').css('left', iw);
    $('.bdbox').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
})
//获取到列表页传过来的url
let url = decodeURI(location.search);
//将字符串转换成对象
let arr = url.split('?')[1];
//获取到列表页传过来的id值
let id = arr.split('=')[1];
//向ajax发送请求
function inni() {
    $.ajax({
        type: 'get',
        url: '../api/details.php',
        data: {
            id
        },
        success: str => {
            // console.log(str);
            crate(str);
        }
    });
    function crate(str) {
        let arr = JSON.parse(str);
        console.log(arr);
        let htmls = arr.map(item => {
            let imgs = item.imgurl.split('&');
            imgs.pop();//删除数组最后一个空格
            let str1 = '';
            for (var i in imgs) {
                str1 += `<li><img class="smpic" src="${imgs[i]}" alt=""></li>`;
            }
            return `<div class="detail-con clearfix">
                        <div class="detail-gallery">
                            <div class='bimg'>
                                <img src="${imgs[0]}"  data-id="${item.gid} alt="" class="bigimg">
                                <div class="mask"></div>
                            </div>                   
                            <div class="zoomlists">
                                <i class="iconfont icon-zuojiantou prev"></i>
                                <div class="zoomlist-con">
                                    <ul>
                                      ${str1}
                                    </ul>
                                </div>
                                <i class="iconfont icon-iconfontjiantou3 next"></i>
                            </div>
                            <div class="lower clearfix">
                                <a href="" class="exclusive">& 我要专属图</a>
                                <a href="" class="collection">
                                    <i class="iconfont icon-xinxing"></i>
                                    收藏货品
                                </a>
                                <a href="" class="lower-price">
                                    <i class="iconfont icon-dijiaqushi"></i>
                                    告诉我们更低的价格
                                </a>
                            </div>
                            <div class="dt-bottom clearfix">
                                <a href="" class="the-packet">
                                    <i class="iconfont icon-shujubao"></i>
                                    数据包
                                </a>
                                <a href="" class="customize-btn">
                                    专属定制
                                </a>
                            </div>
                        </div>
                        <div class="bigpic">
                                <img class="smpic" src="${imgs[0]}" alt="">
                            </div>
                        <div class="detail-info">
                            <h3 class="dt-title">${item.altitle}</h3>
                            <ul class="dt-msg clearfix">
                                <li>spu：${item.sup}</li>
                                <li>所属仓：深圳莱卡尼</li>
                            </ul>
                            <div class="dt-pifa">
                                <p class="pifa">
                                    批发：<span class="pf-num">￥</span><span class="pf-price">${item.pfprice}</span>
                                </p>
                                <p class="dt-jnum">≥1件</p>
                            </div>
                            <div class="detail-style">
                                <p class="style-title">款式：镶嵌物颜色/戒指大小</p>
                                <ul class="clearfix">
                                    <li>
                                        <dl>
                                            <dt class="style-img">
                                                <a href="###">
                                                    <img src="${imgs[0]}"
                                                        alt="">
                                                </a>
                                            </dt>
                                            <dd class="style-size">
                                                白色/8
                                            </dd>
                                            <dd class="style-model">${item.sup}</dd>
                                            <dd class="style-price">￥${item.pfprice}</dd>
                                            <dd class="style-inventory">现货销售（库存<span class="inventory">${item.repertory}</span>）</dd>
                                            <dd class="style-addsub">
                                                <div class="the-addsub clearfix">
                                                    <i class="iconfont icon-jian"></i>
                                                    <input type="text" value="0" class="the-num">
                                                    <i class="iconfont icon-jia"></i>
                                                </div>
                                            </dd>
                                        </dl>
                                    </li>
                                </ul>
                            </div>
                            <div class="shops clearfix">
                                <p class="shops-amount">
                                    共<span id="totalCountpro">0</span>件
                                </p>
                                <p class="shops-price">￥<span id="totalPricepro">0.00</span></p>
                                <button class="shops-now">加入数据包</button>
                                <button class="shops-add">加入进货单</button>
                            </div>
                            <div class="diviconfont" style="margin-top: 15px">
                                <ul class="clearfix">
                                    <li class="icon-title">交易保障：</li>
                                    <li><i class="iconfont icon-tuikuan"></i>七天换退</li>
                                    <li><i class="iconfont icon-zhengpinbz"></i>正品保障</li>
                                    <li><i class="iconfont icon-serviceshandianfahuo"></i>闪电发货</li>
                                    <li><i class="iconfont icon-anquan"></i>安全购物</li>
                                </ul>
                            </div>
                            <div class="diviconfont">
                                <ul class="clearfix">
                                    <li class="icon-title">支付方式：</li>
                                    <li><i class="iconfont icon-zhifubao"></i>支付宝</li>
                                    <li><i class="iconfont icon-weixinzhifu"></i>微信支付</li>
                                    <li><i class="iconfont icon-xinyongzhifu"></i>信用支付</li>
                                    <li class="icon-title" style="margin-left: 30px">交易支持：</li>
                                    <li><i class="iconfont icon-pifa"></i>直批/混批</li>
                                </ul>
                            </div>
                        </div>
                    </div>`;
        }).join('');
        $('.detailist').html(htmls);
        //第一个小图元素高亮显示
        $('.zoomlist-con li:first').attr('class', 'active');
        //当鼠标移入哪个小图的时候哪个小图就高亮显示并切换大图和放大镜的图片
        $('.zoomlist-con li').hover(function () {
            $(this).attr('class', 'active').siblings().attr('class', '');
            let src = $(this).children().attr('src');
            $(this).parent().parent().parent().prev().children().attr('src', src);
            $('.bigpic img').attr('src', src);
        });
        //放大镜，面向对象
        //构造函数：属性
        function Glass() {
            this.bigmig = document.getElementsByClassName('bimg')[0];
            this.bigpic = document.getElementsByClassName('bigpic')[0];
            this.inin();
        }
        //方法：挂在对象原型下面
        Glass.prototype.inin = function (ev) {
            this.bigmig.onmouseover = () => {
                this.bigmig.children[1].style.display = 'block';//遮罩出现
                this.bigpic.style.display = 'block';
            }
            this.mouseout();
            this.mousemove(ev);
        }
        Glass.prototype.mouseout = function () {
            //鼠标移出
            this.bigmig.onmouseout = () => {
                this.bigmig.children[1].style.display = 'none';//遮罩隐藏
                this.bigpic.style.display = 'none';
            }
        }
        Glass.prototype.mousemove = function (ev) {
            this.bigmig.onmousemove = ev => {
                let iLeft = ev.pageX - this.bigmig.offsetLeft - this.bigmig.children[1].offsetWidth / 2;
                let iTop = ev.pageY - this.bigmig.offsetTop - this.bigmig.children[1].offsetHeight / 2;
                //临界值的设置
                if (iLeft <= 0) {//iLeft的临界值
                    iLeft = 0;
                } else if (iLeft >= this.bigmig.offsetWidth - this.bigmig.children[1].offsetWidth) {
                    iLeft = this.bigmig.offsetWidth - this.bigmig.children[1].offsetWidth - 4;
                }
                if (iTop <= 0) {//itop的临界值
                    iTop = 0;
                } else if (iTop >= this.bigmig.offsetHeight - this.bigmig.children[1].offsetHeight) {
                    iTop = this.bigmig.offsetHeight - this.bigmig.children[1].offsetHeight - 4;
                }
                //比例系数
                scalX = iLeft / (this.bigmig.offsetWidth - this.bigmig.children[1].offsetWidth);
                scalY = iTop / (this.bigmig.offsetHeight - this.bigmig.children[1].offsetHeight);
                this.bigmig.children[1].style.left = iLeft + 'px';
                this.bigmig.children[1].style.top = iTop + 'px';
                this.bigpic.children[0].style.left = (this.bigpic.offsetWidth - this.bigpic.children[0].offsetWidth) * scalX + 'px';
                this.bigpic.children[0].style.top = (this.bigpic.offsetHeight - this.bigpic.children[0].offsetHeight) * scalY + 'px';
            }
        }
        new Glass();
        //购物车
        function Goodscar() {
            this.add = document.getElementsByClassName('icon-jia')[0];//加
            this.subtract = document.getElementsByClassName('icon-jian')[0];//减
            this.valnum = document.getElementsByClassName('the-num')[0];//输入框
            this.totalCountpro = document.getElementById('totalCountpro');//总件数
            this.totalPricepro = document.getElementById('totalPricepro');//总价
            this.cons();
            this.num1 = 0;
            this.total = 0;
        }
        Goodscar.prototype.cons = function () {
            //点击添加数量
            this.add.onclick = () => {
                if (this.valnum.value * 1 < `${arr[0].repertory}`) {//当文本框当中的内容<库存量的时候，每单击一次按钮就自加1
                    this.num1 = ++this.valnum.value;//输入框中的内容自加1
                    this.totalCountpro.innerHTML = this.num1;
                    this.total = `${arr[0].pfprice}`;
                    this.totalPricepro.innerHTML = (this.num1 * this.total).toFixed(2);
                }
            }
            //点击删除数量
            this.subtract.onclick = () => {
                if (this.valnum.value > 0) {//当文本框当中的内容<库存量的时候，每单击一次按钮就自加1
                    this.num1 = --this.valnum.value;//输入框中的内容自加1
                    this.totalCountpro.innerHTML = this.num1;
                    this.total = `${arr[0].pfprice}`;
                    this.totalPricepro.innerHTML = (this.num1 * this.total).toFixed(2);
                }
            }
            //手动输入数据时
            this.valnum.oninput = () => {
                if (this.valnum.value < 0) {//当手动输入的数据<1的时候，让输入框的内容一直显示1
                    num.value = 0;
                }
                if (this.valnum.value * 1 > `${arr[0].repertory}`) {//当手动输入的数据>库存量的时候，让输入框的内容一直显示最大库存量
                    this.valnum.value = `${arr[0].repertory}`;
                }
                this.num1 = this.valnum.value;
                this.totalCountpro.innerHTML = this.num1;
                this.total = `${arr[0].pfprice}`;
                this.totalPricepro.innerHTML = (this.num1 * this.total).toFixed(2);
            }
        }
        new Goodscar();
    }
}
inni();


