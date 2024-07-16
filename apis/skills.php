<?php
header('Content-Type: application/json');
$skills = array("skills" => array("JavaScript", "HTML", "CSS", "Node.js", "Express"));
echo json_encode($skills);
?>
