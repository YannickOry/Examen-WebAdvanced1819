<?php
// naam: Yannick Ory

namespace repositories;

use entities\Message;
use entities\Sender;
use model\ModelException;
use PDO;

class SenderRepository
{
    private $pdo;

    public function __construct(\PDO $pdo)
    {

        $this->pdo = $pdo;
    }

    public function getSenderById(int $id): Sender
    {

        $statement = $this->pdo->prepare('SELECT sender.name, message.id, message.contents FROM sender,message WHERE sender.id = message.sender_id and sender.id = :id');

        //$statement->setFetchMode(PDO::FETCH_CLASS, "entities\Sender");

        if ($id == null) {
            throw  new ModelException("ID is leeg");
        } else {
            $statement->execute(['id' => $id]);
            $statement->setFetchMode(PDO::FETCH_ASSOC);

            $sender = null;


            while ($message = $statement->fetch()) {

                if ($sender != null) {
                    $sender->addMessage(Message::make($message['id'], $message['contents']));
                } else {

                    $sender = Sender::make($id, $message["name"]);
                    $sender->addMessage(Message::make($message['id'], $message['contents']));

                }

            }



        }
        if ($sender == null){
            throw new ModelException($id." niet gevonden");
        }
        return $sender;
    }


}
