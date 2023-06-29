<?php 
require_once('model/ConnectBdd.php');

    if (isset($_POST) && !empty ($_POST)) {
        $action = $_POST['action'];
    } else {
        $json = file_get_contents('php://input');
        $obj = json_decode($json);
        $action = $obj->action;
    }

    // $action = 'showAllUsers';
    switch ($action) {
        case 'showAllUsers':
            $users = showAllUsers();
            echo json_encode($users);
            break;
        case 'addUser':
            $userIsAdd = addUser($_POST, $_FILES);
            echo json_encode($userIsAdd);
            break;
        case 'modifUser':
            $userIsModif = modifUser($_POST, $_FILES);
            echo json_encode($userIsModif);
            break;
        case 'deleteUser':
            $userIsDelete = deleteUser($obj->id);
            echo json_encode($userIsDelete);
            break;
        case 'showAllPosts':
            $posts = showAllPosts();
            echo json_encode($posts);
            break;
        case 'addPost':
            $postIsAdd = addPost($_POST, $_FILES);
            echo json_encode($postIsAdd);
            break;
        case 'modifPost': 
            $postIsUpdate = modifPost($_POST, $_FILES);
            echo json_encode($postIsUpdate);
            break;
        case 'deletePost':
            $postIsDelete = deletePost($obj->id);
            echo json_encode($postIsDelete);
            break;
        case 'modifFunders':
            $isUpdate = modifFunders($_POST, $_FILES);
            echo json_encode($isUpdate);
            break;
        
    }