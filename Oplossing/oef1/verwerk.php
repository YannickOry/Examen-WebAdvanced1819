<?php
// naam: Yannick Ory

require_once "vendor/autoload.php";

use repositories\SenderRepository;
use model\ModelException;
$id = $_GET["senderid"];
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
    $senderRepository = new SenderRepository($pdo);

    $zender =  $senderRepository->getSenderById($id);

    print("Sender met name ".$zender->getName()." heeft ". $zender->countNumberOfMessages()." berichten"."</br>" );

   for ($i = 0 ; $i < $zender->countNumberOfMessages(); $i++){
       print($zender->getMessageByIndex($i)->getContents()."</br>");
   }



}catch (ModelException $exception){
    print ($exception->getMessage());
}


