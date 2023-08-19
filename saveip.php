<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$ipAddress = $data["ipAddress"];
$filePath = "ip_addresses.txt";

// Append the IP address to the file
file_put_contents($filePath, $ipAddress . PHP_EOL, FILE_APPEND);

$response = ["message" => "IP address saved successfully."];
echo json_encode($response);
?>
