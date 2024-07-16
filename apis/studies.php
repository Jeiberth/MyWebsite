<?php
header('Content-Type: application/json');

$studies = array(
    "studies" => array(
        array(
            "title" => "Software Development",
            "institution" => "Vanier College",
            "description" => "This program focuses on equipping students with the skills to consult on software design, enhance existing software, and develop tailored solutions that optimize operational efficiency and meet user needs."
        ),
        array(
            "title" => "Diploma in Service Excellence for Business",
            "institution" => "ILAC International College",
            "description" => "This diploma sharpens customer service and leadership skills, essential for enhancing customer experiences and workplace culture in any industry."
        ),
        array(
            "title" => "Technician in Administrative Assistance",
            "institution" => "Servicio Nacional de Aprendizaje",
            "description" => "It is a program sharpens key competencies in customer service and administrative support, tailored for the software industry’s evolving technological landscape."
        )
    )
);

echo json_encode($studies);
?>
