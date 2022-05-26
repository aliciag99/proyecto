<template>
    <div class="general">
        <p>¡Bienvenid@!</p>
        <p>En un plazo máximo de 24 horas te asignaremos tu comunidad/es para que puedas comenzar a hacer reservas de tus zonas comunes</p>
    </div>
</template>

<script>
export default {
    name: 'Bienvenida'

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
    margin-bottom: 20px;
}
/**************** Tablets ****************/
@media only screen and (min-width: 768px) {
    p {
        font-size: 1.5rem;
        padding: 0 60px;
    }
}
/*************** Escritorio ***************/
@media only screen and (min-width: 1024px) {
    p {
        font-size: 1.2rem;
        padding: 0 260px;
    }
}
/************** Pantallas XL **************/
@media only screen and (min-width: 1280px) {
    p {
        font-size: 1.5rem;
        padding: 0 290px;
    }
}
</style>
