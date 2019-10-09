function Checkinput(opt) {
    this.defaults = {
        success: function () { },
        nullError: function () { },
        reglError: function () { }
    }

    this.option = Object.assign(this.defaults, opt);
    this.checkBox = document.getElementById(this.option.ele);
    this.init();
}

Checkinput.prototype.init = function () {

    $(this.checkBox).on(this.option.event, function () {

        if (this.checkBox.value.trim()) {
            //非空验证->正则->正确性(和数据库数据验证)
            var isok = this.regular(this.option.type).test(this.checkBox.value); //eval() 把字符串转成js代码
            // console.log(this)
            if (isok) { //正则验证通过
                this.option.success();
            } else { //正则验证不通过
                this.option.reglError();
            }
        } else {
            this.option.nullError();
        }
    }.bind(this))

}

Checkinput.prototype.regular = function (type) { //  封装函数正则大全

    if (type == 'chines') { //  中文
        return /^[\u4e00-\u9fa5]{0,}$/
    }
    if (type == 'number') { //  数字
        return /^[0-9]*$/;
    }
    if (type == 'wD') { //数字和英文
        return /^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$/
    }
    if (type == 'tel') { //  手机号码
        return /^1[3456789]\d{9}$/;
    }
    if (type == 'password') { //  密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
        return /^[a-zA-Z]\w{5,17}$/
    }
    if (type == 'account') { //   帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)
        return /^[a-zA-Z][a-zA-Z0-9_]{4,16}$/
    }
    if (type == 'userName') { //   帐号是否合法(4-16字节的中文、字母、数字，不能有特殊字符的账号)
        return /^[(a-zA-Z0-9\u4e00-\u9fa5){1}_#]{4,16}$/
    }
    if (type == 'usPassword') { //  6-16位的密码
        return /^[\da-zA-Z_\u4e00-\u9f5a]{6,16}$/
    }
    if (type == 'zipCode') { //  邮政编码
        return /^\d{6}$/
    }
    if (type == 'email') { //  邮箱
        return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    }
    if (type == 'idCard') { //  身份证
        return /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/
    }
    if (type == 'date') { //  验证日期格式YYYY-MM-DD
        return /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
    }
    if (type == 'QQ') { //  QQ号
        return /^[1-9][0-9]{4,}$/
    }
    if (type == 'url') { //  网址
        return /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]$/
    }

};
//  调用方法
// new Checkinput({
//     ele: 'userUID',
//     event:'blur',
//     type: 'userName',
//     success: function () {},
//     nullError: function () {},   内容为空时
//     reglError: function () {}    正则不通过时
// });
