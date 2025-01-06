<?php
header ("Access-Control-Allow-Origin:*");
header ("Access-Control-Allow-Methods:GET,POST,OPTIONS,DELETE,PUT");
header ("Access-Control-Allow-Headers:Content-Type,Authorization,X-Requested-With");
header ("Content-Type:application/json");

$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "project06";
$conn = new mysqli($servername,$username,$password,$dbname);

if($conn->connect_error){
    die("Connection failed:".$conn->connect_error);
}
?>