var indexnew = document.querySelectorAll('.eShop_info clearfix .eShop_info_rank eShop_info_news');
var arr = [];
for (var ele of indexnew) {
    var obj = {};
    if (ele.getElementsByTagName('h3')) {
        obj.title = ele.querySelector('h3');
    }
    if (ele.querySelector('.eShop_info_newsListImg img')) {
        obj.url = ele.querySelector('.eShop_info_newsListImg img').src;
    }
    if (ele.querySelector('.eShop_info_newsList .eShop_info_newsListTit')) {
        obj.listTit = ele.querySelector('.eShop_info_newsList .eShop_info_newsListTit').innerHTML;
    }
    if (ele.querySelector('.eShop_info_newsList .eShop_info_newsListTxt')) {
        obj.listTxt = ele.querySelector('.eShop_info_newsList .eShop_info_newsListTxt').innerHTML;
    }
    if (ele.querySelector('.eShop_info_newsList .eShop_info_newsListDate')) {
        obj.listDate = ele.querySelector('.eShop_info_newsList .eShop_info_newsListDate').innerHTML[0];
    }
    if (ele.querySelectorAll('eShop_info_newsInfoList .eShop_info_newsInfoTxt')) {
        for (var item of ele.querySelectorAll('eShop_info_newsInfoList .eShop_info_newsInfoTxt')) {
            obj.newfoTxt = item;
        }
    }
    arr.push(obj);
}