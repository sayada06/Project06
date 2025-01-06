<?php

    include("db.php");
    session_start();
    if(isset($_SESSION['id'])){
        session_unset();
        session_destroy();
        echo json_encode(["message" => "ออกจจากระบบสำเร็จ"]);
    }else{
        echo json_encode(["message" => "คุณยังไม่ได้เข้าสู่ระบบ"]);
    }