<?php 
require_once ('./functions/functions.php');
class ConnectBdd
{
    public $bdd;

    public function __construct()
    {
        $user = "u372472927_alex";
        $pass = "6E7#/90IAWc/";
        $host = "localhost";
        $db = "u372472927_milo";
        // $user = "u372472927_alex";
        // $pass = "6E7#/90IAWc/";
        // $host = "srv990.hstgr.io";
        // $db = "u372472927_milo";
        $this->bdd = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    }
}




