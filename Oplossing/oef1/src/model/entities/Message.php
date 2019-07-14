<?php
// naam: Yannick Ory
namespace entities;

use model\ModelException;

class Message
{
    private $id;
    private $contents;

    private function __construct($id, $contents)
    {
        $this->setContents($contents);
        $this->setId($id);
    }

    public static function make($id, $contents)
    {
        $bericht =  new Message($id, $contents);
        return $bericht;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        if ($id <= 0) {
            throw new ModelException("ID gelijk of onder 0");
        } else {
            $this->id = $id;
        }
    }

    /**
     * @return mixed
     */
    public function getContents()
    {
        return $this->contents;
    }


    public function setContents($contents)
    {
        if ($contents == "") {
            throw new ModelException("Content is lege string");
        } else {
            $this->contents = $contents;
        }
    }


}
