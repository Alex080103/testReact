<?php 

class Funders 
{
    private $id;
    private $picture;
    private $download;
    private $post_id;

    public function __construct (int $id,string $picture,string $download,int $post_id)
    {
        $this->id = $id;
        $this->picture = $picture;
        $this->download = $download;
        $this->post_id = $post_id;
    }

    public function setId (int $id):void { $this->id = $id;}
    public function setDownload (string $download):void { $this->download = $download;}
    public function setPicture (string $picture):void { $this->picture = $picture;}

    public function getId ():int { return $this->id;}
    public function getPicture ():string { return $this->picture;}
    public function getDownload ():string { return $this->download;}

}