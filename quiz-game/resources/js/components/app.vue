<script setup lang="ts">

</script>


<template>
    <nav>
        <div class="header">
            <div class="header-logo">
<!--                <img src="/../img/octo.png" alt="logo">-->
                <router-link class="link" to="/">thuis</router-link>

            </div>

            <div class="header-links">
                <router-link class="link" to="/quizlijst">Quizlijst</router-link>
                <router-link class="link" to="/uitleg">Uitleg</router-link>
            </div>
            <div class="header-login">
                <router-link class="link" to="/">placeholder</router-link>

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
}

.header-logo {
    width: min-content;
    margin: auto auto auto 10%;
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
