<?php 
require_once ('./controller/frontController.php');
require_once ('./controller/adminController.php');
require_once ('./functions/functions.php');
class ConnectBdd
{
    public $bdd;

    public function __construct()
    {
        $user = "root";
        $pass = "";
        $host = "localhost";
        $db = "mission_locale";
        // $user = "dbu5557170";
        // $pass = "p6V4yrM2";
        // $host = "db5011786821.hosting-data.io";
        // $db = "dbs9928735";
        $this->bdd = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    }
}

require_once ('User.php');
require_once ('Funders.php');
require_once ('Post.php');
require_once ('Admin.php');