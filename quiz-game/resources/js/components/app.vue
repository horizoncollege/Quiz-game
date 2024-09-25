<template>
    <h1>Hello world</h1>
<p>
    huidige pagina: {{ $route.fullPath }}
</p>
    <nav>
        <div>
            <router-link class="link" to="/">Thuis</router-link>
            <router-link class="link" to="/uitleg">Uitleg</router-link>

        </div>
    </nav>

    <main>
        <router-view/>
    </main>

</template>