<?php 
    function showAllUsers()
    {    
        $userRepository = new UserRepository;
        $users = $userRepository->showAllUsers();
        return $users;
    }