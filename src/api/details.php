<?php
    include 'conn.php';
     //接收前端传来的数据
     $lid=isset($_REQUEST['id'])?$_REQUEST['id']:'';
     // echo $id;
     //写语句
     $sql="SELECT * FROM list WHERE gid=$lid";
     // //执行语句
     $res=$conn->query($sql);//结果集
     //提取结果集里面的数据部分
     $arr=$res->fetch_all(MYSQLI_ASSOC);
     echo json_encode($arr,JSON_UNESCAPED_UNICODE);
     //关闭数据库
     $res->close();
     $conn->close();
?>