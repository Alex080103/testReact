<?php 
            // var_dump("ca passe");

    require_once('controller/frontController.php');
    // var_dump("ca passe");

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
            // var_dump($users);
            echo json_encode($users);
            break;
        case 'showAllPosts':
            $posts = showAllPosts();
            echo json_encode($posts);
            break;
        case 'connect': 
            $isConnect = connect($_POST);
            if ($isConnect['connect'] == "Connexion réussie") {
                $_SESSION['user'] = [ "name" => $_POST['email']];
            }
            echo json_encode($isConnect);
            break;
        if (!isset($_SESSION['user']) && empty($_SESSION['user'])
         && !isset($_SESSION['user']['name']) && empty($_SESSION['user']['name']) )  {
            break;
        }
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