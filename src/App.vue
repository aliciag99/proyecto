<template>
    <div id="app">
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
body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f8f8;
}
</style>
