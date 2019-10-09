<?php
 include 'conn.php';
 //接收从前端传过来的数据
 $username=isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
 $password=isset($_REQUEST['password']) ? $_REQUEST['password'] : '';
 //写语句
 $sql="INSERT INTO users (username,password) VALUES ('$username','$password')";
 //执行语句
 $res = $conn->query($sql);
 if($res){
      //插入成功
     echo 'yes';
 }else{
      //插入失败
     echo 'no';
 }