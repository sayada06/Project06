<?php

 include_once ('../db.php');
    $table = "CREATE TABLE users(
    id int(6) AUTO_INCREMENT COMMENT 'รหัสผู้ใช้',
    name varchar(100) COMMENT 'ชื่อ-นามสกุล',
    email varchar(100) COMMENT 'อีเมล',
    username varchar(100) COMMENT 'ชื่อผู้ใช้',
    password varchar(100) COMMENT 'รหัสผ่าน',
    create_at TIMESTAMP DEFAULT
    CURRENT_TIMESTAMP COMMENT 'วันที่สร้าง',
    update_at TIMESTAMP DEFAULT
    CURRENT_TIMESTAMP ON UPDATE
    CURRENT_TIMESTAMP COMMENT 'วันที่อัพเดต',
    PRIMARY KEY (id) 
    )";

if($conn->query($table) === TRUE) {
    echo "DONE";
}else{
    echo "Error" .$conn->error;
}

$conn->close();//ปิดฐานข้อมูล

?>