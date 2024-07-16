<?php
header('Content-Type: application/json');

// Fetch random advice
$adviceResponse = file_get_contents('https://api.adviceslip.com/advice');
$adviceData = json_decode($adviceResponse, true);
$advice = $adviceData['slip']['advice'];

// Fetch related photo
$apiKey = 'YOUR_PEXELS_API_KEY';
$photoResponse = file_get_contents("https://api.pexels.com/v1/search?query=" . urlencode($advice) . "&per_page=1", false, stream_context_create([
    "http" => [
        "header" => "Authorization: 5yZAVVh7vpnhrpTJHIzOzYr9jkqJfFPgDfHjVHFYatFmHDaLFMcVM9rU"
    ]
]));
$photoData = json_decode($photoResponse, true);
$photoUrl = $photoData['photos'][0]['src']['medium'] ?? '';

// Combine advice and photo
$response = [
    'advice' => $advice,
    'photo' => $photoUrl
];

echo json_encode($response);
?>
