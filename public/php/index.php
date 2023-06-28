<?php 
require_once('model/ConnectBdd.php');
    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $action = $obj->action;
    switch ($action) {
        case 'showAllUsers':
            $users = showAllUsers();
            echo(json_encode($users));
    }