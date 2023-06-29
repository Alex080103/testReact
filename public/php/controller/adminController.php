<?php 

function addUser (array $post, array $files) :bool
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
    $path = securizeImage($files['photo'], "/upload/team/");
    $pathAccueil = securizeImage($files['photoAccueil'], "/upload/team/");
    $user = new User(0, $post['name'], $post['surname'], $post['poste'], 
    $post['description'], $path, $pathAccueil, $post['localisation'], 
    $post['linkedin']);
    $userRepository = new UserRepository;
    $userIsAdd = $userRepository->addUser($user);
    return $userIsAdd;
}

function modifUser(array $post, array $files) :bool
{
    $path = false;
    $pathAccueil = false;

    if (isset($files['photo']) && !empty($files['photo']) && $files['photo']['error'] == 0) {
        $path = securizeImage($files['photo'], "/upload/team/");

    }
    if (isset($files['photoAccueil']) && !empty($files['photoAccueil']) && $files['photoAccueil']['error'] == 0) {
        $pathAccueil = securizeImage($files['photoAccueil'], "/upload/team/");
    }

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

function addPost(array $post, array $files):bool
{
    $path = securizeImage($files['poster'], "/upload/poster/");
    $pathVideo = securizeImage($files['screen'], "/upload/screen/");
    $post = new Post(0, 0, $post['post'], $post['link'], $post['linkYoutube'], $path, $pathVideo);
    $postRepository = new PostRepository;
    $postIsAdd = $postRepository->addPost($post);
    return $postIsAdd;
}

function modifPost(array $post, array $files):bool
{
    $path = false;
    $pathVideo = false;

    if (isset($files['poster']) && !empty($files['poster']) && $files['poster']['error'] == 0) {
        $path = securizeImage($files['poster'], "/upload/poster/");
    }
    if (isset($files['screen']) && !empty($files['screen']) && $files['screen']['error'] == 0) {
        $pathVideo = securizeImage($files['screen'], "/upload/screen/");        
    }
    // var_dump($files['poster']['name']);

    $post = new Post($post['id'], 0, $post['post'], $post['link'], $post['linkYoutube'], $path, $pathVideo);
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
    if (isset($files['activity']) && !empty($files['activity']) && $files['activity']['error'] == 0) {
        $pathPdf = securizePdf($files['activity'], "/upload/activity/");        
    }

    if (isset($post['year']) && !empty($post['year'])) {
        $year = $post['year'];
    }

    $founders = new Funders(1, $pathImage, $pathPdf, $year);
    $foundersRepository = new FundersRepository;
    $isUpdate = $foundersRepository->modifFunders($founders);
    return $isUpdate;
}
