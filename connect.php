<?php 

$server = 'us-cdbr-east-02.cleardb.com';
$username = 'ba3726e28e3e61';
$password = 'a2195117';
$database = 'heroku_5c84e53cd025961';

$connection = mysqli_connect($server,  $username, $database, $password);
if (!$connection){
    die("Database Connection Failed" . mysqli_error($connection));
}
$select_db = mysqli_select_db($connection, $database);
if (!$select_db){
    die("Database Selection Failed" . mysqli_error($connection));
}

if(isset($_POST) & !empty($_POST)){
 
   $email = $_POST['email'];

   if (!isset($email) || empty($email)){
        $error[] = "Email is required";
    }else {
       
         $sql = "INSERT INTO `capture` (email) VALUES ('$email')";
            if(mysqli_query($connection, $sql)){
                header('Location: index.html');
            } else{
               echo 'query error: '. mysqli_error($connection);
            }
        
    }
}
?>