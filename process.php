<?php
    //get values from form in login.php file
    $username = $POST['username'];
    $username = $POST['password'];
    
    //to prevent mySQL injection
    $username = stripcslashes($username)
    
?>