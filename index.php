<?php include 'layout/head.php'?>


<header>
    <h1>Barnabeer</h1>
    <p>Only good beers</p>
</header>

<div>
    <h3>Ajouter une bière à la liste</h3>
    <input type="text" id="myInput" placeholder="nom d'une bière"/>
    <span onclick="newElement()">add</span>
</div>

<div>
    <h3>Toutes les bières en bouteils</h3>
    <ul class="beers" id="myUL">
        <li class="beer">Jupiler</li>
        <li class="beer">Maes</li>
        <li class="beer">Leffe</li>
    </ul>
</div>

<?php include 'layout/end.php'?>
