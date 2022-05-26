<template>
    <div class="general">
        <p>Tu reserva se ha realizado correctamente</p>
        <p>Gracias por utilizar Spatia</p>
    </div>
</template>

<script>
export default {
    name: 'Confirmacion'
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
        font-size: 1.5rem;
    }
}
/*************** Escritorio ***************/
@media only screen and (min-width: 1024px) {
    p {
        font-size: 1.3rem;
    }
}
/************** Pantallas XL **************/
@media only screen and (min-width: 1280px) {
    p {
        font-size: 1.5rem;
    }
}
</style>
