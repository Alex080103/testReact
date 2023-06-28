<?php
require_once('ConnectBdd.php');

class User 
{
    private int $id;
    private string $name;
    private string $surname;
    private string $poste;
    private string $description;
    private string $photo;
    private string $localisation;
    private string $linkedin;
    private string $role;

    public function __construct (int $id, string $surname, string $poste, string $description, string $photo, string $localisation, string $linkedin, string $role)
    {   
        $this->id = $id;
        $this->surname = $surname;
        $this->poste = $poste;
        $this->description = $description;
        $this->photo = $photo;
        $this->localisation = $localisation;
        $this->linkedin = $linkedin;
        $this->role = $role;
    }   

    public function setId(int $id):void { $this->id = $id; }
    public function setName(string $name):void { $this->name = $name; }
    public function setSurname(string $surname):void { $this->surname = $surname; }
    public function setPoste(string $poste):void { $this->poste = $poste;}
    public function setDescription(string $description):void { $this->description = $description;}
    public function setPhoto(string $photo):void { $this->photo = $photo;}
    public function setLocalisation(string $localisation):void { $this->localisation = $localisation;}
    public function setLinkedin(string $linkedin):void { $this->linkedin = $linkedin;}
    public function setRole(string $role):void { $this->role = $role;}

    public function getId ():int { return $this->id; }
    public function getName():string { return $this->name;}
    public function getSurname():string { return $this->surname;}
    public function getPoste():string  { return $this->poste; }
    public function getDescription():string { return $this->description;}
    public function getPhoto():string { return $this->photo;}
    public function getLocalisation():string { return $this->localisation;}
    public function getLinkedin():string { return $this->linkedin;}
    public function getRole():string { return $this->role;}

}

class UserRepository extends ConnectBdd
{

        function showAllUsers ()
        {
            $req = $this->bdd->prepare("SELECT * FROM user");
            $req->execute();
            $datas = $req->fetchAll(PDO::FETCH_ASSOC);
            return $datas;
        }

        function addUser(object $user)
        {
            $name = htmlspecialchars($user->getName(),ENT_QUOTES);
            $surname = htmlspecialchars($user->getSurname(),ENT_QUOTES);
            $poste = htmlspecialchars($user->getPost(),ENT_QUOTES);
            $description = htmlspecialchars($user->getDescription(),ENT_QUOTES);
            $photo = htmlspecialchars($user->getPhoto(),ENT_QUOTES);
            $localisation = htmlspecialchars($user->getLocalisation(),ENT_QUOTES);
            $linkedin = htmlspecialchars($user->getLinkedin(),ENT_QUOTES);

            $req = $this->bdd->prepare("INSERT INTO user VALUES (?, ?, ?, ?, ?, ?, ?)");
            $req->execute([$name, $surname, $poste, $description, $photo, $localisation, $linkedin]);
        }

    
}