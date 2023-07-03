<?php 
    function showAllUsers()
    {    
        $userRepository = new UserRepository;
        $users = $userRepository->showAllUsers();
        // var_dump($users);
        return $users;
    }

    function showAllPosts()
    {
        $postRepository = new PostRepository;
        $posts = $postRepository->showAllPosts();
        return $posts;
    }