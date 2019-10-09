<?php

 include 'conn.php';
  //接收前端传过来的用户名和密码
  $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
  $password=isset($_REQUEST['password']) ? $_REQUEST['password'] : '';
  //写语句
  $sql="SELECT * FROM users WHERE username='$username' AND password='$password'";
  //执行语句
  $res=$conn->query($sql);//结果集
  if($res->num_rows){
      //登录成功
      echo 'yes';
  }else{
      //登录失败
      echo 'no';
  }