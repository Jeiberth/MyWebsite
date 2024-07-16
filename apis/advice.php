<?php
header('Content-Type: application/json');

// Get the path parameter
$path = trim($_SERVER['REQUEST_URI'], '/');
$parts = explode('/', $path);
$query = isset($parts[1]) ? urlencode($parts[1]) : '';

// Fetch advice based on the query
$adviceResponse = file_get_contents("https://api.adviceslip.com/advice/search/$query");
$adviceData = json_decode($adviceResponse, true);

if (isset($adviceData['slips']) && count($adviceData['slips']) > 0) {
    $advice = $adviceData['slips'][0]['advice'];

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
} else {
    $response = [
        'advice' => 'No advice found.',
        'photo' => ''
    ];
}

echo json_encode($response);
?>
