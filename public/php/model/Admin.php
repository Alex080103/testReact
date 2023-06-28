<?php 

class Admin 
{
    private $id;
    private $name;
    private $mdp;
    private $role;

    public function __construct (int $id, string $name, string $mdp, string $role) 
    {
        $this->id = $id;
        $this->name = $name;
        $this->mdp = $mdp;
        $this->role = $role;
    }

    public function setId (int $id):void { $this->id = $id; }
    public function setName (string $name):void { $this->name = $name; }
    public function setMdp (string $mdp):void { $this->mdp = $mdp; }
    public function setRole (string $role):void { $this->role = $role; }

    public function getId ():int { return $this->id; }
    public function getName ():string { return $this->name; }
    public function getMdp ():string { return $this->mdp; }
    public function getRole ():string { return $this->role; }
}