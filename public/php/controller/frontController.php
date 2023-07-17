<?php 
require_once('./model/ConnectBdd.php');
require_once('./model/User.php');
require_once('./model/Funders.php');
require_once('./model/Post.php');
require_once('./model/Admin.php');

    function showAllUsers($limit, $offset)
    {    
        $userRepository = new UserRepository();

        $users = $userRepository->showAllUsers($limit, $offset);

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

    function showFunders()
    {
        $fundersRepository = new FundersRepository;
        $funders = $fundersRepository->showFunders();
        return $funders;
    }
