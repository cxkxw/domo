<?php
    include 'conn.php';
 //接收前端传过来的数据
 $page=isset($_REQUEST['ipage'])?$_REQUEST['ipage']:'';
 $num=isset($_REQUEST['num'])?$_REQUEST['num']:'';
 $paixu=isset($_REQUEST['paixu'])?$_REQUEST['paixu']:'';
 $val1=isset($_REQUEST['val1'])?$_REQUEST['val1']:'';
 $val2=isset($_REQUEST['val2'])?$_REQUEST['val2']:'';
 $like=isset($_REQUEST['like'])?$_REQUEST['like']:'';
 
 //写语句
 
 $index= ($page-1) * $num;
 if($paixu) {
    $sql = "SELECT * FROM list ORDER BY pfprice $paixu LIMIT $index,$num ";
}else if($val1&&$val2){
    $sql = "SELECT * FROM list WHERE pfprice BETWEEN $val1 AND $val2 ORDER BY pfprice desc LIMIT $index,$num";
}else if($like){
    $sql="SELECT * FROM list WHERE con LIKE '%$like%' LIMIT $index,$num";
}
else{
    $sql="SELECT * FROM list LIMIT $index,$num";
}
 
 //执行语句
 $res=$conn->query($sql);//结果集
//  var_dump($res);
 //提取结果集里面的数据部分
 $arr=$res->fetch_all(MYSQLI_ASSOC);
//  var_dump($arr);
//查询整个表的语句
$sql1='SELECT * FROM list';
$res1=$conn->query($sql1);
//制作关联数组，可以一次性把多个值传回给前端
$data=array(
    'page'=>$page,
    'num'=>$num,
    'total'=>$res1->num_rows,
    'list'=>$arr,
    'paixu'=>$paixu,
    'val1'=>$val1
);
echo json_encode($data);
//关闭连接
// $res->close();
// $res1->close();
// $conn->close();
?>