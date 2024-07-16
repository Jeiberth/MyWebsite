<?php
    
    ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


    $Cname = $_POST['Cname'];
    $Cemail = $_POST['Cemail'];
    $Cinfo = $_POST['Cinfo'];

    $conn = new mysqli('auth-db1387.hstgr.io','u802332184_Jeiberth','Jm1000337595','u802332184_Info');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
        echo "kk succesfuly";
    }else{
        $stmt = $conn->prepare("insert into InterestedContacts(Cname, Cemail, Cinfo) values(?,?,?)");
        $stmt->bind_param("sss",$Cname, $Cemail, $Cinfo);
        $stmt->execute();
        echo "Inserted succesfuly";
        $stmt->close();
        $conn->close();
    }


?>