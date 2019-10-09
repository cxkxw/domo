<?php
 include 'conn.php';
 $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
 //写语句
 $sql="SELECT * FROM users WHERE username='$username'";
 //执行语句
 $res=$conn->query($sql);//结果集
 // var_dump ($res);
 if($res->num_rows){
     //有值返回，不能注册
     echo 'no';
 }else{
     echo 'yes';
 }