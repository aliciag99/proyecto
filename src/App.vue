<template>
    <div id="app">
        <div>
            <!-- <router-link to="/">
                Home
            </router-link>
            <router-link to="/inicio">
                Inicio
            </router-link> -->
        </div>
        <Menu />
        <Footer />
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',
    components: {
        Menu,
        Footer
    }
};
</script>

<style>

</style>
