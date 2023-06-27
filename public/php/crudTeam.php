<?php

// $req = $bdd->prepare("SELECT * FROM persons");
// $req->execute();
// $datas-> $req->fetchAll(PDO::FETCH_ASSOC);

// $req = $bdd->prepare("UPDATE nom, prenom, photo FROM persons WHERE person_id = ?");
// $req->execute([$id]);

// $req = $bdd->prepare("INSERT INTO persons (person_id, person_name, person_surname, person_photo, person_description)");
// $req->execute([$id]);

// $req = $bdd->prepare("DELETE FROM persons WHERE person_id = ?");
// $req->execute([$id]);


$persons = array(
    array(
        'id' => 1,
        'nom' => 'Rodier',
        'prenom' => 'Laura',
        'description' => "Accueil et secrétariat : je jongle avec les téléphones, les dossiers et les sourires. Je suis l'as des réceptions et le maître des clés secrètes, avec une bonne dose d'humour pour illuminer les journées de tous !",
        'photo' => '/assets/img/equipe/laura.png',
        'portrait' => "/assets/img/miloPage/equipe/laura.jpg",
        'role' => "Chargée d'accueil et secrétariat"
    ),
    array(
        'id' => 2,
        'nom' => 'MACKPAYEN',
        'prenom' => 'Elisabeth',
        'description' => "Spécialiste en contrat engagement jeune, je suis là pour accompagner les jeunes vers leur insertion professionnelle. Découvrez mes conseils personnalisés pour réussir votre parcours!",
        'photo' => '/assets/img/equipe/elisabeth.png',
        'portrait' => "/assets/img/miloPage/equipe/elisabeth.jpg",
        'role' => 'conseillère CEJ'
    ),
    array(
        'id' => 3,
        'nom' => 'FOLASTRE',
        'prenom' => 'Sonia',
        'description' => "Conseillère dédiée à l'accompagnement des jeunes vers l'emploi et la formation. Ensemble, donnons vie à vos projets professionnels. Réalisez votre potentiel dès aujourd'hui !",
        'photo' => '/assets/img/equipe/sonia.png',
        'portrait' => "/assets/img/miloPage/equipe/sonia.jpg",
        'role' => 'Conseillère Formation Emploi'
    ),
    array(
        'id' => 4,
        'nom' => 'BINET',
        'prenom' => 'Christine',
        'description' => "Christine organise des forums qui mettent en relation les talents et les opportunités. En bref, le sens de l’humain passe avant tout dans ses missions ! 
        Elle gère aussi nos réseaux sociaux et la conception des supports de communication divers.",
        'photo' => '/assets/img/equipe/christine.png',
        'portrait' => "/assets/img/miloPage/equipe/christine.jpg",
        'role' => 'Chargée de projets et de communication'
    ),
    array(
        'id' => 5,
        'nom' => 'LEBLANC',
        'prenom' => 'Géraldine',
        'description' => "Conseillère dédiée à l'accompagnement des jeunes vers l'emploi et la formation. Ensemble, donnons vie à vos projets professionnels. Réalisez votre potentiel dès aujourd'hui !",
        'photo' => '/assets/img/equipe/geraldine.png',
        'portrait' => "/assets/img/miloPage/equipe/geraldine.jpg",
        'role' => 'Conseillère Formation Emploi'
    ),
    array(
        'id' => 6,
        'nom' => 'BIGAND',
        'prenom' => 'Laurence',
        'description' => "Conseillère dédiée à l'accompagnement des jeunes vers l'emploi et la formation. Ensemble, donnons vie à vos projets professionnels. Réalisez votre potentiel dès aujourd'hui !",
        'photo' => '/assets/img/equipe/laurence.png',
        'portrait' => "/assets/img/miloPage/equipe/laurence.jpg",
        'role' => 'Conseillère Formation Emploi'
    ),
    array(
        'id' => 7,
        'nom' => 'CHOLET',
        'prenom' => 'Anne Laure',
        'description' => "Conseillère dédiée à l'accompagnement des jeunes vers l'emploi et la formation. Ensemble, donnons vie à vos projets professionnels. Réalisez votre potentiel dès aujourd'hui !",
        'photo' => '/assets/img/equipe/anne_laure.png',
        'portrait' => "/assets/img/miloPage/equipe/anne_laure.jpg",
        'role' => 'Conseillère Formation Emploi'
    )
);

echo(json_encode($persons));

?>
