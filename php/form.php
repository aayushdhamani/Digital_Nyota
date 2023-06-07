<?php
 $server_nmae="localhost";
 $user_name="root";
 $password="";
 $database="users";
 $conn=mysqli_connect($server_nmae,$user_name,$password,$database);
 if($conn){
    echo "you have successfully connected to database";
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $user_name=$_POST['name'];
        $user_number=$_POST['number'];
        $user_email=$_POST['mobile'];
        $user_type=$_POST['Invitation'];
        $user_comments=$_POST['comments'];
        $sql="INSERT INTO `users` (`sno`, `name`, `mobile_no`, `email`, `invitation`, `comments`) VALUES ('$user_name', '$user_number', '$user_email', '$user_type', '$user_comments')";
        $result = mysqli_query($conn, $sql);
    }
    else {
        echo 'your code is incorrect';
    }

    }
?>