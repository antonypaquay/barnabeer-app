<?php include 'layout/head.php'?>


<header>
    <div class="wrapper">
        <h1>Barnabeer</h1>
        <p>Only good beers</p>
    </div>
</header>

<section class="section__card">
    <div class="wrapper">
        <div class="beer__add">
            <h3>Ajouter une nouvelle bière à la carte</h3>
            <form>
                <fieldset>
                    <legend>Informations sur le produit</legend>
                    <input type="text" id="beerName" placeholder="ex: Maredsous"/>
                    <input type="text" id="beerPrice" placeholder="ex: 3,90"/>
                </fieldset>
                <fieldset>
                    <legend>Spécificités</legend>
                    <input type="text" id="beerAlcool" placeholder="5,5">
                    <select id="beerType">
                        <option disabled selected>Choisir son type</option>
                        <option>Blonde</option>
                        <option>Brune</option>
                        <option>Blanche</option>
                        <option>Ambree</option>
                        <option>Rousse</option>
                        <option>Gueuze</option>
                        <option>Kriek</option>
                        <option>Faro</option>
                        <option>Stout</option>
                        <option>Noire</option>
                        <option>NA</option>
                    </select>
                    <select id="beerQuantity">
                        <option disabled selected>Quantité en Cl</option>
                        <option>25 cl</option>
                        <option>33 cl</option>
                        <option>37,5 cl</option>
                        <option>37,5 cl</option>
                        <option>75 cl</option>
                    </select>
                </fieldset>
            </form>
            <button onclick="newElement(beerName, beerType, beerPrice, beerAlcool, beerQuantity)">Ajouter à la carte</button>
        </div>

        <div class="beers__list">
            <h3>Toutes nos bières en bouteille</h3>
            <p class="beer__counter">
                Bières disponibles
                <span class="beer__counter__value">0</span>
            </p>
            <ul class="beers" id="myUL">
            </ul>
        </div>
    </div>
</section>

<?php include 'layout/end.php'?>
