<?php 

function connect(array $post)
{
    if ((isset($post['email']) && !empty($post['email'])) && (isset($post['password']) && !empty($post['password']))) {
        $admin = new Admin(0, $post['email'], $post['password']);
        $adminRepository = new AdminRepository;
        $IsConnect = $adminRepository->connect($admin);
        return $IsConnect;
    } else {
        return [
            "error" => "Un des champs n'est pas rempli"
        ];
    }
}

function addUser (array $post, array $files) :bool | array
{
// $post = [
//     'name'=>'alex' ,
//     'surname'=>'deaz' ,
//     'poste' => 'fzze',
//     'description'=>'dezzdezde',
//     'photo'=>'fzezefe',
//     'localisation'=>'fezzfe',
//     'linkedin'=>'dezfzfe'
// ];
    if ((!isset($post['name']) || empty($post['name'])) || (!isset($post['surname']) || empty($post['surname'])) 
    || (!isset($post['poste']) || empty($post['poste'])) || (!isset($post['description']) || empty($post['description'])) 
    || (!isset($post['localisation']) || empty($post['localisation']))) {
        return [
            'error' => 'Un des fichiers est introuvable.'
        ];
    }
    if (isset($files['photo']) && !empty($files['photo']) && $files['photo']['error'] == 0) {
        $path = securizeImage($files['photo'], "/upload/team/");
    } else {
        return [
            'error' => "La photo d'équipe n'est pas présente."
        ];
    }
    if (isset($files['photoAccueil']) && !empty($files['photoAccueil']) && $files['photoAccueil']['error'] == 0) {
        $pathAccueil = securizeImage($files['photoAccueil'], "/upload/team/");
    } else {
        return [
            'error' => "La photo d'équipe pour l'accueil n'est pas présente."
        ];
    }

    $user = new User(0, $post['name'], $post['surname'], $post['poste'], 
    $post['description'], $path, $pathAccueil, $post['localisation'], 
    $post['linkedin']);
    $userRepository = new UserRepository;
    $userIsAdd = $userRepository->addUser($user);
    return $userIsAdd;
}

function modifUser(array $post, array $files) : bool | array
{
    $path = false;
    $pathAccueil = false;
    if ((!isset($post['id']) || empty($post['id'])) || (!isset($post['name']) || empty($post['name'])) || (!isset($post['surname'])  || empty($post['surname']))
    || (!isset($post['poste']) || empty($post['poste'])) || (!isset($post['description']) || empty($post['description'])) || (!isset($post['localisation']) || empty($post['localisation']))) {
        return [
            'error' => 'Un des fichiers est introuvable.'
        ];
    }

    if (isset($files['photo']) && !empty($files['photo']) && $files['photo']['error'] == 0) {
        $path = securizeImage($files['photo'], "/upload/team/");
    } 
    // else {
    //     return [
    //         'error' => "La photo d'équipe n'est pas présente."
    //     ];
    // }
    if (isset($files['photoAccueil']) && !empty($files['photoAccueil']) && $files['photoAccueil']['error'] == 0) {
        $pathAccueil = securizeImage($files['photoAccueil'], "/upload/team/");
    } 
    // else {
    //     return [
    //         'error' => "La photo d'équipe pour l'accueil n'est pas présente."
    //     ];
    // }

    $user = new User($post['id'], $post['name'], $post['surname'], $post['poste'], 
    $post['description'], $path, $pathAccueil, $post['localisation'], 
    $post['linkedin']);
    $userRepository = new UserRepository;
    $userIsUpdate = $userRepository->modifUser($user);
    return $userIsUpdate;
}

function deleteUser($id):bool
{
    $userRepository = new UserRepository;
    $userIsDelete = $userRepository->deleteUser($id);
    return $userIsDelete;
}

function addPost(array $post, array $files):bool | array
{

    if ((!isset($post['link']) || empty($post['link']) 
    || strlen($post['link']) == 0 )|| (!isset($post['linkYoutube'])  || empty($post['linkYoutube']) || strlen($post['linkYoutube']) == 0) 
    || (!isset($files['poster']) || empty($files['poster']) || $files['poster']['error'] !== 0) || 
    ( !isset($files['screen']) || empty($files['screen']) || $files['screen']['error'] !== 0 )){
        return [
            'error' => 'Un des fichiers est introuvable.'
        ];
    } 

    $path = securizeImage($files['poster'], "/upload/poster/");
    $pathVideo = securizeImage($files['screen'], "/upload/screen/");
    $post = new Post(0, 0, $post['post'], $post['link'], $post['linkYoutube'], $path, $pathVideo, $post['status']);
    $postRepository = new PostRepository;
    $postIsAdd = $postRepository->addPost($post);
    return $postIsAdd;
}

function modifPost(array $post, array $files):bool | array
{
    $path = false;
    $pathVideo = false;
    // var_dump($post);
    if ((!isset($post['id']) || empty($post['id']) || strlen($post['id']) == 0)  || 
    (!isset($post['link']) || empty($post['link']) || strlen($post['id']) == 0 )||
    (!isset($post['post']) || empty($post['post']) || strlen($post['post']) == 0 ) ||  
    (!isset($post['linkYoutube'])  || empty($post['linkYoutube']) || strlen($post['linkYoutube']) == 0) ||
    (!isset($post['status']) || empty($post['status']) || strlen($post['status']) == 0 )
    ) {
        return [
            'error' => 'Un des fichiers est introuvable.'
        ];
    } 

    if (isset($files['poster']) && !empty($files['poster']) && $files['poster']['error'] == 0) {
        $path = securizeImage($files['poster'], "/upload/poster/");
    } 
    // else {
    //     return [
    //         'error' => "L'affiche n'est pas présente."
    //     ];
    // }
    if (isset($files['screen']) && !empty($files['screen']) && $files['screen']['error'] == 0) {
        $pathVideo = securizeImage($files['screen'], "/upload/screen/");        
    } 
    // else {
    //     return [
    //         'error' => "Le screen de la vidéo Youtube n'est pas présent."
    //     ];
    // }
    // var_dump($files['poster']['name']);

    $post = new Post($post['id'], 0, $post['post'], $post['link'], $post['linkYoutube'], $path, $pathVideo, $post['status']);
    $postRepository = new PostRepository;
    $postIsUpdate = $postRepository->modifPost($post);
    return $postIsUpdate;
}

function deletePost($id):bool
{
    $postRepository = new PostRepository;
    $postIsDelete = $postRepository->deletePost($id);
    return $postIsDelete;
}

function modifFunders(array $post, array $files):bool
{
    $pathImage = false;
    $pathPdf = false;
    $year = false;

    var_dump($files['activity']);

    if (isset($files['founder']) && !empty($files['founder']) && $files['founder']['error'] == 0) {
        $pathImage = securizeImage($files['founder'], "/upload/founders/");
    } 
    if (isset($files['founderMobil']) && !empty($files['founderMobil']) && $files['founderMobil']['error'] == 0) {
        $pathMobile = securizeImage($files['founderMobil'], "/upload/founders/");        
    }
    if (isset($files['activity']) && !empty($files['activity']) && $files['activity']['error'] == 0) {
        $pathPdf = securizePdf($files['activity'], "/upload/activity/");        
    }
    if (isset($post['year']) && !empty($post['year'])) {
        $year = $post['year'];
    }

    $founders = new Funders(1, $pathImage, $pathMobile, $pathPdf, $year);
    $foundersRepository = new FundersRepository;
    $isUpdate = $foundersRepository->modifFunders($founders);
    return $isUpdate;
}
