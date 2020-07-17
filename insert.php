<?php 

$connection = mysqli_connect('localhost', 'root', '');
if (!$connection){
    die("Database Connection Failed" . mysqli_error($connection));
}
$select_db = mysqli_select_db($connection, 'party-planner');
if (!$select_db){
    die("Database Selection Failed" . mysqli_error($connection));
}

if(isset($_POST) & !empty($_POST)){
 
   $email = $_POST['email'];

   if (!isset($email) || empty($email)){
        $error[] = "Email is required";
    }

    if(!isset($error) || empty($error)){
       
         $sql = "INSERT INTO `capture` (email) VALUES ('$email')";
            if(mysqli_query($connection, $sql)){
                header('Location: index.html');
            } else{
               echo 'query error: '. mysqli_error($connection);
            }
        
    }
}
?>