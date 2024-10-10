<script>
import {Link} from '@inertiajs/vue3';

export default {
    components: {
        Link,
    },
};
</script>


<template>
    <nav>
        <div class="header">
            <div class="header-logo">
                <Link class="link link-logo" href="/">
                    <img src="../../../img/octo.png" alt="logo">
                </Link>
            </div>
            <div class="header-links">
                <Link class="link" href="/quizlijst">Quizlijst</Link>
                <Link class="link" href="/uitleg">Uitleg</Link>
            </div>
            <div class="header-login">
                <Link> <img src="../../../img/login.png" alt="login"> </Link>

            </div>
        </div>
    </nav>
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

.header-login img {
    max-width: 50px;
}

.header-logo {
    width: min-content;
    margin: auto auto auto 10%;
    display: flex;
    max-height: 100%;
}

.header-logo img {
    max-height: 80%;
    object-fit: contain;
    max-width: 50px;
    margin: auto;
}

.link-logo {
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
