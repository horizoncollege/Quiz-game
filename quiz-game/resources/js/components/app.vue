<script>
</script>


<template>
    <nav>
        <div class="header">
            <div class="header-logo">

                <router-link class="link link-logo" to="/">  <img src="../../../img/octo.png" alt="logo"></router-link>

            </div>

            <div class="header-links">
                <router-link class="link" to="/quizlijst">Quizlijst</router-link>
                <router-link class="link" to="/uitleg">Uitleg</router-link>
            </div>
            <div class="header-login">
                <img src="../../../img/login.png" alt="login">

            </div>
        </div>
    </nav>

    <main>
        <router-view/>
    </main>

</template>


<style>
.header {
    background-color: var(--backgroundBlack);
    border-bottom: 2px solid var(--primairyColor);
    height: 50px;
    justify-content: center;
    display: flex;
}

.header-links {
    width: min-content;
    margin: auto;
    display: flex;
}

.header-login {
    width: min-content;
    margin: auto 10% auto auto;
    display: flex;
    max-height: 100%;
}

.header-login img{
    max-width: 50px;
}

.header-logo {
    width: min-content;
    margin: auto auto auto 10%;
    display: flex;
    max-height: 100%;
}

.header-logo img{
    max-height: 80%;
    object-fit: contain;
    max-width: 50px;
    margin: auto;
}

.link-logo{
    margin: 0px !important;
    display: flex;
}

.link {
    margin: 10px;
    color: var(--textColorWhite);
    text-decoration: none;
}

.link.active {
    color: var(--primairyColor);
    text-decoration: underline;
}


</style>
