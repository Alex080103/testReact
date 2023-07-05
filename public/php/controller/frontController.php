<?php 
require_once('./model/ConnectBdd.php');
require_once('./model/User.php');
require_once('./model/Funders.php');
require_once('./model/Post.php');
require_once('./model/Admin.php');

    function showAllUsers()
    {    
        // var_dump('salut');
        $userRepository = new UserRepository();
        // var_dump("suite");

        $users = $userRepository->showAllUsers();
        // var_dump($users);

        // var_dump($users);
        return $users;
    }

    function showAllPosts()
    {
        $postRepository = new PostRepository;
        $posts = $postRepository->showAllPosts();
        return $posts;
    }