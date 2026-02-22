<?php
$user = $_POST['user'] ?? '';
$pass = $_POST['pass'] ?? '';

if ($user === "Jose@gmail.com" && $pass === "1234") {
    echo "success";
} else {
    echo "error";
}
?>