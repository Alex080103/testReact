<?php 

class Admin 
{
    private $id;
    private $name;
    private $mdp;

    public function __construct (int $id, string $name, string $mdp) 
    {
        $this->id = $id;
        $this->name = $name;
        $this->mdp = $mdp;
    }

    public function setId (int $id):void { $this->id = $id; }
    public function setName (string $name):void { $this->name = $name; }
    public function setMdp (string $mdp):void { $this->mdp = $mdp; }

    public function getId ():int { return $this->id; }
    public function getName ():string { return $this->name; }
    public function getMdp ():string { return $this->mdp; }
}

class AdminRepository extends ConnectBdd 
{
    function connect(object $admin) : array
    {
        $name = htmlspecialchars($admin->getName(), ENT_QUOTES);
        $mdp = htmlspecialchars($admin->getMdp(), ENT_QUOTES);

        $req = $this->bdd->prepare("SELECT * FROM admin WHERE admin_name = ? AND admin_mdp = ?");
        $req->execute([$name, $mdp]);
        $isConnected = $req->fetch();

        if ($isConnected == true) {
            $isConnect =  [
                'connect' => 'Connexion réussie',
            ];
        } else {
            $isConnect = [
                'connect' => 'Connexion échouée',
            ];
        }
        return $isConnect;
    }
}