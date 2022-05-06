<template>
    <div class="menu">
        <router-link
            to="/"
            tag="span"
            class="mano"
        >
            Spatia
        </router-link>
        <router-link
            to=""
            tag="span"
        >
            Comunidades
        </router-link>
        <router-link
            to=""
            tag="span"
        >
            Zonas comunes
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Menu'
};
</script>

<style>
.menu {
    background-color: #212529;
    color: whitesmoke;
    width: 100%;
    height: 135px;
    font-size: 2rem;
    line-height: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.mano {
    cursor: pointer;
}
</style>
