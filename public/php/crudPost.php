<?php

$persons = array(
    array(
        'id' => 1,
        'nom' => 'Dupont',
        'prenom' => 'Jean',
        'description' => 'Expert en gestion financière avec plus de 10 ans d\'expérience.',
        'photo' => 'https://picsum.photos/100/100',
        'role' => 'Gestion'
    ),
    array(
        'id' => 2,
        'nom' => 'Martin',
        'prenom' => 'Marie',
        'description' => 'Spécialiste en ressources humaines, axée sur le développement.',
        'photo' => 'https://picsum.photos/100/100',
        'role' => 'Conseiller'
    ),
    array(
        'id' => 3,
        'nom' => 'Leroy',
        'prenom' => 'Pierre',
        'description' => 'Directeur des opérations passionné par l\'optimisation des processus.',
        'photo' => 'https://picsum.photos/100/100',
        'role' => 'Directeur'
    ),
    array(
        'id' => 4,
        'nom' => 'Garcia',
        'prenom' => 'Sophie',
        'description' => 'Experte en marketing digital avec une solide expérience dans le commerce en ligne.',
        'photo' => 'https://picsum.photos/100/100',
        'role' => 'Conseiller'
    ),
    array(
        'id' => 5,
        'nom' => 'Leclerc',
        'prenom' => 'Thomas',
        'description' => 'Gestionnaire de projets expérimenté dans le secteur des technologies.',
        'photo' => 'https://picsum.photos/100/100',
        'role' => 'Gestion'
    )
);

echo(json_encode($persons));

?>