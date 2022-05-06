<template>
    <div>
        <div>Vista Home</div>
        <div>Bienvenido a reservas Spatia, un sistema de reservas de zonas comunes de comunidades de vecinos</div>
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

</style>
