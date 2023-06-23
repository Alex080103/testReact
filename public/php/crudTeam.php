<?php

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
        'role' => 'Conseillère formation emploi'
    ),
    array(
        'id' => 3,
        'nom' => 'BINET',
        'prenom' => 'Christine',
        'description' => "Chargée de projet et de communication passionnée, je suis là pour concrétiser vos idées et promouvoir votre message. Ensemble, créons des projets impactants et communiquons avec succès. ",
        'photo' => '/assets/img/equipe/christine.png',
        'portrait' => "/assets/img/miloPage/equipe/christine.jpg",
        'role' => 'Chargée de projets et de communication'
    ),
);

echo(json_encode($persons));

?>