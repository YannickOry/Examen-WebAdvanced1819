<?php
// naam: Yannick Ory

namespace entities;

use model\ModelException;

class Sender
{
    private $id;
    private $name;
    private $messages;


    private function __construct($id, $name)
    {
        $this->setId($id);
        $this->setName($name);
        $this->messages = array();
    }

    public static function make($id,$name){
       $zender =  new Sender($id,$name);
        return $zender;
    }

    public function addMessage(Message $message){
        $this->messages[] = $message;
    }

    public function countNumberOfMessages() :int{
        return count($this->messages);
    }

    public function getMessageByIndex($id) :Message {

        return $this->messages[$id];

    }
    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }


    public function setId($id)
    {
        if ($id <= 0) {
            throw new ModelException("ID gelijk of onder 0");
        } else {
            $this->id = $id;
        }
    }


    public function setName($name)
    {
        if ($name == "") {
            throw new ModelException("Name is lege string");
        } else {
            $this->name = $name;
        }
    }


}
