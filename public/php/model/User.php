<?php
require_once('ConnectBdd.php');

class User
{
    private int $id;
    private string $name;
    private string $surname;
    private string $poste;
    private string $description;
    private mixed $photo;
    private mixed $photo_accueil;
    private string $localisation;
    private string $linkedin;
    private string $role;

    public function __serialize() 
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'surname' => $this->surname,
            'poste' => $this->poste,
            'description' => $this->description,
            'photo' => $this->photo,
            'photo_accueil' => $this->photo_accueil,
            'localisation' => $this->localisation,
            'linkedin' => $this->linkedin,
            // 'role' => $this->role,
        ];
    }

    public function __construct (int $id, string $name, string $surname, string $poste, string $description, mixed $photo, mixed $photo_accueil, string $localisation, string $linkedin)
    {   
        $this->id = $id;
        $this->name = $name;
        $this->surname = $surname;
        $this->poste = $poste;
        $this->description = $description;
        $this->photo = $photo;
        $this->photo_accueil = $photo_accueil;
        $this->localisation = $localisation;
        $this->linkedin = $linkedin;
        // $this->role = $role;
    }   

    public function setId(int $id):void { $this->id = $id; }
    public function setName(string $name):void { $this->name = $name; }
    public function setSurname(string $surname):void { $this->surname = $surname; }
    public function setPoste(string $poste):void { $this->poste = $poste;}
    public function setDescription(string $description):void { $this->description = $description;}
    public function setPhoto(mixed $photo):void { $this->photo = $photo;}
    public function setPhotoAccueil (mixed $photoAccueil):void { $this->photo_accueil = $photoAccueil;}
    public function setLocalisation(string $localisation):void { $this->localisation = $localisation;}
    public function setLinkedin(string $linkedin):void { $this->linkedin = $linkedin;}
    public function setRole(string $role):void { $this->role = $role;}

    public function getId ():int { return $this->id; }
    public function getName():string { return $this->name;}
    public function getSurname():string { return $this->surname;}
    public function getPoste():string  { return $this->poste; }
    public function getDescription():string { return $this->description;}
    public function getPhoto():mixed { return $this->photo;}
    public function getPhotoAccueil():mixed { return $this->photo_accueil; }
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
            $users = [];
            // var_dump($datas);
            foreach ( $datas as $data ) {
                $user = new User($data['user_id'], $data['user_name'],$data['user_surname'], $data['user_poste'], 
                $data['user_description'], $data['user_photo'], $data['user_photo_accueil'], $data['user_localisation'], $data['user_linkedin']);
                $user = $user->__serialize();
                $users[] = $user;
            }
            return $users;
        }

        function addUser(object $user): bool
        {
            $name = htmlspecialchars($user->getName(),ENT_QUOTES);
            $surname = htmlspecialchars($user->getSurname(),ENT_QUOTES);
            $poste = htmlspecialchars($user->getPoste(),ENT_QUOTES);
            $description = htmlspecialchars($user->getDescription(),ENT_QUOTES);
            $photo = htmlspecialchars($user->getPhoto(),ENT_QUOTES);
            $photo_accueil = htmlspecialchars($user->getPhotoAccueil(),ENT_QUOTES);
            $localisation = htmlspecialchars($user->getLocalisation(),ENT_QUOTES);
            $linkedin = htmlspecialchars($user->getLinkedin(),ENT_QUOTES);

            $req = $this->bdd->prepare("INSERT INTO user (user_name, user_surname, user_poste, user_description, 
            user_photo, user_photo_accueil, user_localisation, user_linkedin)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
            $userIsAdd = $req->execute([$name, $surname, $poste, $description, $photo, $photo_accueil, $localisation, $linkedin]);
            return $userIsAdd;
        }

        function modifUser(object $user): bool
        {
            $query = "UPDATE user SET 
            user_name = ?, user_surname = ?, user_poste = ?, 
            user_description= ?";
            $id = htmlspecialchars($user->getId(), ENT_QUOTES);
            $name = htmlspecialchars($user->getName(),ENT_QUOTES);
            $surname = htmlspecialchars($user->getSurname(),ENT_QUOTES);
            $poste = htmlspecialchars($user->getPoste(),ENT_QUOTES);
            $description = htmlspecialchars($user->getDescription(),ENT_QUOTES);
            $localisation = htmlspecialchars($user->getLocalisation(),ENT_QUOTES);
            $linkedin = htmlspecialchars($user->getLinkedin(),ENT_QUOTES);
            $execute = [$name, $surname, $poste, $description];

            if ($user->getPhoto() !== false) {
                $photo = htmlspecialchars($user->getPhoto(),ENT_QUOTES);
                $query.= ", user_photo = ?";
                $execute [] = $photo;
            }
            if ($user->getPhotoAccueil() !== false) {
                $photo_accueil = htmlspecialchars($user->getPhotoAccueil(),ENT_QUOTES);
                $query.= ", user_photo_accueil = ?";
                $execute [] = $photo_accueil;
            }
            $query .= ", user_localisation = ?, user_linkedin = ?";

            $execute [] = $localisation;
            $execute [] = $linkedin;
            $execute [] = $id;

            $req = $this->bdd->prepare($query."WHERE user_id = ?");
            $userIsAdd = $req->execute($execute);
            return $userIsAdd;
        }

        function deleteUser ($id): bool
        {
            $id = htmlspecialchars($id, ENT_QUOTES);
            $req = $this->bdd->prepare("DELETE FROM user WHERE user_id = ?");
            $isDelete = $req->execute([$id]);
            return $isDelete;
        }

    
}