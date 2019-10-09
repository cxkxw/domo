//点击登录按钮的时候，检测用户名和密码是否和数据库的一样，一样允许登录，反之不允许登录
$('.btn').on('click', function () {
    let usernames = getcookie('username');
    if ($('#phone').val().trim() && $('#password').val().trim()) {
        if (usernames) {
            alert('你已经登录过了');
        } else {
            $.ajax({
                type: 'get',
                url: '../api/login.php',
                data: {
                    username: $('#phone').val().trim(),
                    password: $('#password').val().trim()
                },
                success: str => {
                    if (str == 'yes') {
                        alert('登录成功');
                        setdata();
                        let url = getcookie('url');
                        if (url) {
                            //证明是有上一页的，跳转回上一页
                            location.href = url;
                        } else {
                            location.href = '01index.html';
                        }
                    } else {
                        alert('登录失败');
                    }
                }
            });
        }
    }
});
function setdata() {
    setcookie('username', $('#phone').val().trim(), 7);//把用户名存在cookie中，存7天
}