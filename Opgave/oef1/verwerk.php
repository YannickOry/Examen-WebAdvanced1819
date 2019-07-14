<?php
// naam: 

$user = 'root';
$password = 'root';
$database = 'examenwa2019';
$server = 'localhost';
$pdo = null;
try {
    $pdo = new PDO("mysql:host=$server;dbname=$database", $user, $password);
    $pdo->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );
    $senderRepository=new SenderRepository($pdo);

