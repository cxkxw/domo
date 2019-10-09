<?php
header('Content-type:text/html;charset=utf-8');
//与数据库创建连接
$servername='localhost';
$username='root';
$password='root';
$dbname='pfh';
$conn=new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
    die('连接失败：'.$conn->connect_error);
}else{
    // echo '连接成功';
    mysqli_set_charset( $conn, "utf8");
}

