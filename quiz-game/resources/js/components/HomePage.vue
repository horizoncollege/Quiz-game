<template>

    <div class="content-row">
        <div class="content-blok">
            <div class="paragraaf">
                <div class="paragraaf-tekst">
                    <h2 class="paragraaf-header header-homepagina">Welkom bij de Octo game</h2>
                    <div class="paragraaf-tekst-content">
                        <p>
                            Hier kun je quizzes spelen, scores bijhouden je statistieken zien. Maak een account aan en
                            begin vandaag nog met quizzen. Klik op de knop hieronder om naar de uitleg pagina te gaan.
                        </p>
                    </div>
                    <div class="paragraaf-knop">
                        <router-link class="knop knop-default " to="/uitleg">
                            <p class="knop-tekst">Uitleg</p>
                        </router-link>

                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<style>
.header-homepagina{
    font-size: 4rem;
}


.knop {
    cursor: pointer;
    text-decoration: none;
    padding: 0.75rem 1.6rem 0.75rem 1.6rem;
    width: fit-content;
    display: flex;
    min-width: 10rem;
    transition: 0.2s;
    user-select: none;
}
.knop-tekst{
    margin: 0;
    transition: 0.2s;

}

.knop:hover  .knop-tekst{
    margin-left: 4px;
    transition: 0.2s;
}


.paragraaf-knop {
    padding: 2rem;
    width: min-content;
    margin: auto;
}

/* default knop */

.knop-default {
    background-color: var(--backgroundBlack);
    transition: 0.2s;
    border: 1px var(--primairyColor) solid;
    user-select: none;
    color: var(--textColorWhite);
}


.knop-default:hover {
    border: 1px var(--accentColor) solid;
    transition: 0.2s;
}

</style>
