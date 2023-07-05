<?php 
require_once('./model/ConnectBdd.php');
require_once('./model/User.php');
require_once('./model/Funders.php');
require_once('./model/Post.php');
require_once('./model/Admin.php');

    function showAllUsers()
    {    
        $userRepository = new UserRepository();

        $users = $userRepository->showAllUsers();

        return $users;
    }

    function showRandomUsers() 
    {
        $userRepository = new UserRepository();
        $users = $userRepository->showRandomUsers();
        return $users;
    }

    function showAllPosts()
    {
        $postRepository = new PostRepository;
        $posts = $postRepository->showAllPosts();
        return $posts;
    }