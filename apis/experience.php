<?php
header('Content-Type: application/json');

$experiences = array(
    "experiences" => array(
        array(
          
            "title" => "Web Development",
            "description" => "In the dynamic field of web development, I have honed my skills through hands-on experience, creating several websites with a trial-and-error approach. Currently, I am spearheading a project of a game shop, designing an online platform that will enable them to venture into e-commerce. Utilizing HTML, CSS, and JavaScript, I am crafting a user-friendly interface that caters to the digital shopping experience."
        ),
        array(
          
            "title" => "Iso 8583",
            "description" => "A few months ago, I have immersed myself in a project centered around ISO 8583 message structures. With Java as my tool of choice, I have developed a system that interprets these financial transaction messages, decoding their intricate structure to reveal the underlying information. This endeavor has not only sharpened my programming skills but also deepened my understanding of financial communication protocols."
        ),
        array(
            
            "title" => "Software Competition",
            "description" => "At the WarHacks competition hosted by Concordia University, I collaborated with peers from various academic institutions to engineer a robot capable of navigating a racecourse laden with obstacles. This challenge required a seamless integration of hardware and software, utilizing Arduino technology. It was a testament to our collective problem-solving abilities and technical prowess in bringing a complex creation to life."
        ),
        array(
    
            "title" => "Scouts",
            "description" => "Since the age of ten, Scouts has been a cornerstone of my personal development, instilling in me the values of teamwork and swift problem solving. It has cultivated my ability to view challenges from multiple perspectives, enabling me to devise effective solutions. Moreover, it has enriched my interpersonal skills, allowing me to forge strong connections with individuals from diverse backgrounds and cultures."
        )
    )
);

echo json_encode($experiences);
?>
