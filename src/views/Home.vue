<template>
    <div class="general">
        <p>Bienvenido a reservas Spatia, un sistema de reservas de zonas comunes de comunidades de vecinos</p>
        <button @click="reservar">
            Reservar
        </button>
    </div>
</template>

<script>

export default {
    name: 'Home',
    methods: {
        reservar () {
            this.$router.push('/inicio');
        }
    }
};
</script>

<style scoped>
.general {
    flex-direction: column;
    text-align: center;
    height: 40vh;
    padding: 25px;
}
p {
    font-size: 1.1rem;
    margin-bottom: 30px;
}
/**************** Tablets ****************/
@media only screen and (min-width: 768px) {
    p {
        font-size: 1.4rem;
    }
    button {
        margin-top: 5%;
    }
}
/*************** Escritorio ***************/
@media only screen and (min-width: 1024px) {
    p {
        padding: 5% 10% 0 10%;
    }
    button {
        margin-top: 2%;
    }
}
/************** Pantallas XL **************/
@media only screen and (min-width: 1280px) {
    .general {
        margin-top: 2%;
    }
    p {
        font-size: 1.5rem;
    }
    button {
        height: 42px;
        margin-top: 5%;
    }
}
</style>
