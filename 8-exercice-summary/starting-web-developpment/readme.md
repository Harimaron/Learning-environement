# 1. Présentation du code
## A. Le head
```html
<head>
<!-- Je commence par la commande <meta> qui permettra à mon site d'être lisible sur un maximum de système. -->
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<!-- Je lie ensuite la source qui contient mes icônes. -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- Vient ma police. -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,800" rel="stylesheet">    
<!-- Puis mon css. -->
    <link rel="stylesheet" href="style.css">
    <!-- J'utilise la commande <title> pour nommer ma page oueb. -->
    <title>Tim Berners-Lee</title>
</head>
``` 
## B. Le body
```html
<body>
    <!-- J'englobe mon tout avec ma classe "wrapper" pour pouvoir lui appliquer un style par la suite. -->
    <div class="wrapper">

        <!-- Je commence par créer une classe "block column" pour administer les propriétés de column à mon bloc. -->

        <div class="block column">
            <!-- Une classe pour placer mon image. -->
            <div class="profile-picture">
                <img src="./images/one.jpeg">
            </div>
            <!-- Une classe pour placer mon titre principal. -->
            <h1 class="profile-title">Tim Berners-Lee</h1>
            <!-- Une classe pour placer mon titre secondaire. -->
            <h2 class="profile-subtitle">Inventor of HTML</h2>
            <!-- Ensuite une classe pour y placer mon texte principal. -->
            <p class="profile-text">
                Tim Berners-Lee is the
                <b>inventor</b> of the Web. In 1989, Tim was working in a computing services section of CERN when he came up
                with the concept; at the time he had no idea that it would be implemented on such an
                <b>enormous scale.</b>
            </p>
            <!-- Une classe pour mon gros bouton rouge. -->
            <button class="profile-button">
                <b>See for yourself</b>
            </button>
        </div>
        <!-- Je continue par créer une classe "block row" pour administer les propriétés de row à mon bloc. -->
        <div class="block row">
            <!-- J'initie mes boutons de réseaux sociaux. -->
            <a class="button" href="https://www.facebook.com" target="_blank">
                <i class="fa fa-facebook"></i>Facebook</a>
            <a class="button" href="https://www.linkedin.com" target="_blank">
                <i class="fa fa-linkedin"></i>Linkedin</a>
            <a class="button" href="https://www.twitter.com" target="_blank">
                <i class="fa fa-twitter"></i>Twitter</a>
        </div>
        <!-- Je pose ma classe bloc. -->
        <div class="block">
            <!-- Je continue par ajouter la classe du titre des différents films. -->
            <h2 class="movies-title">His favorite movies</h2>
            <!-- Puis par ajouter une classe pour chaque film ainsi que pour chaque descriptions de films. -->
            <div class="movies">
                <div class="image">
                    <img src="./images/two.jpeg">
                </div>
                <div class="description">
                    <div class="title">2001 - Space Odyssey</div>
                    <div class="text"> Humanity finds a mysterious, obviously artificial, object buried beneath the Lunar surface and with,
                        the intelligent computer H.A.L. 9000, sets off on a quest.</div>
                </div>
            </div>
            <div class="movies">
                <div class="image">
                    <img src="./images/three.jpeg">
                </div>
                <div class="description">
                    <div class="title">Monsieur Hulot</div>
                    <div class="text"> Monsieur Hulot comes to a beachside hotel for a vacantion, where he accidentally (but good-naturedly)
                        cause havoc.</div>
                </div>
            </div>
            <div class="movies">
                <div class="image">
                    <img src="./images/four.jpeg">
                </div>
                <div class="description">
                    <div class="title">Alien</div>
                    <div class="text"> The commercial vessel Nostromo receives a distress call from an unexplored planet. After searching for
                        survivors, the crew heads home only to realize that deadly bioform has joined them.
                    </div>
                </div>
            </div>
        </div>

    </div>
</body>
```

## C. Le CSS
```CSS
html, body {
    /* Je définis la taille globale de mon ouebsite. */
    height: 100%;
    width: 100%;
    margin: 0;
    /* J'ajoute ma police globale. */
    font-family: "Open Sans", sans-serif;
    /* J'ajoute la couleur de mon background principal. */
    background-color: #EEEEEE;
}

.wrapper {   
    /* J'administre la taille de la couverture de mon body ainsi que ses propriétés. */
    width: 100%;
    /* J'active le flex. */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;   
}


.block {
    /* Je donne des propriétés à mes blocs blancs. */
    width: 850px; 
    background-color: white;
    /* Je réalise l'espace vide qui se trouve sous mes blocs et au-dessus de ceux-ci. */
    margin-bottom: 50px;
    /* Une belle petite ombre à tous. */
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1);
    align-items: center;
    /* Un padding pour centrer les éléments dans mes blocs. */
    padding: 20px;
    box-sizing: border-box;
}

.block:first-child {
    /* J'impose un margin à mon premier bloc. */
    margin-top: 50px;
}


.profile-picture {
    /* J'administre une taille à mon image. */
    height: 150px;
    width: 150px;
    /* J'utilise le border-radius pour rendre mon image ronde. */
    border-radius: 50%;
    /* J'empêche mon image de déborder parce que ma classe est carrée à la base. */
    overflow: hidden;
    /* J'ajoute mes petits bords. */
    border:5px solid #EEEEEE;
}

.profile-picture img {
    /* Je change la taille de l'image seule. */
    width: 100%;
    height: auto;
}

p {
    /* J'administre une couleur à mon paragraphe. */
    color: #979797;
    text-align: justify;
    margin: 0px 100px 0px;
}


.profile-title {
    /* J'administre une couleur à mon titre. */
    color:#DA5252;
}

.profile-subtitle {
    /* J'introduis les propriétés de mon deuxième titre. */
    text-align: justify;
    margin: 0px;
    color:#7E7E7E;
    font-family: Arial, Helvetica, sans-serif;
}

.movies-title {
    /* Je positionne le titre de mes films. */
    display: flex;
    justify-content: center;
    color:#7E7E7E;
    font-weight: 400;
    margin-bottom: 50px;

}

.profile-button {
    /* Je change la couleur mon bouton rouge. */
    background-color: #DA5252;
    /* Je change la couleur de son texte. */
    color: white;
    /* Je le positionne. */
    padding: 10px;
    /* Je lui retire les bords du bouton de base. */
    border:none;
    /* Je lui administre son bord arrondi. */
    border-radius:3px;
    /* Je fais en sorte que le curseur change en passant sur le bouton. */
    cursor: pointer;
    /* Je fais hériter mon texte de la police de son parent. */
    font-family: inherit;
    /* Je choisis son épaisseur. */
    font-weight: 300;
    /* Je choisis sa taille. */
    font-size: 1.2em;
    
}


.button {
    /* Je change les propriétés de mes boutons de réseaux sociaux. */
    /* D'abord la taille du texte. */
    font-size: 1.3em;
    /* J'active le flex pour pouvoir introduire les columns. */
    display: flex;
    flex-direction: column;
    /* J'impose une taille à mes boutons. */
    height: 150px;
    width: 150px;
    justify-content: center;
    align-items: center;
    color: #BBB9B9;
    cursor: pointer;
    /* Je retire les propriétés de base des boutons. */
    text-decoration: none;
}

.movies .image {
    /* Je positionne mes différentes images. */
margin-right: 40px;
}


.movies {
    /* J'ajoute des propriétés globales au texte de mes films. */
    color: #979797;
    display: flex;
    padding: 0 20px; 
    margin: 50px 0;   
}

.profile-text {
    /* Je positionne le texte de présentation. */
    margin:20px 0 5px; 
}

.column {
    /* Je précise les propriétés de mon flex. */
    display:flex;
    flex-direction: column;
}

.row {
    /* Je précise les propriétés de mon flex. */
    flex-direction: row;
    display: flex;
    justify-content: center;
}

.movies .description {
    /* J'administre une taille au texte de mes descriptions. */
    font-size:1.2em;
}

.movies .description .title {
    /* J'administre différentes propriété au titre de mes descriptions. */
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
}
```

# 2. Problèmes rencontrés
