<template>
    <div class="general">
        <p>Selecciona los datos para realizar tu reserva</p>
        <FormularioSeleccion />
    </div>
</template>

<script>
import FormularioSeleccion from '../components/FormularioSeleccion.vue';
export default {
    name: 'Seleccion',
    components: {
        FormularioSeleccion
    }
};
</script>

<style scoped>
.general {
    flex-direction: column;
    text-align: center;
    padding: 0 25px;
    margin-top: 0;
}
/**************** Tablets ****************/
@media only screen and (min-width: 768px) {
    p {
        font-size: 1.5rem;
        padding: 30px 90px;
    }
}
/*************** Escritorio ***************/
@media only screen and (min-width: 1024px) {
    p {
        margin: 0;
        font-size: 1.3rem;
        line-height: 1%;
    }
}
/************** Pantallas XL **************/
@media only screen and (min-width: 1280px) {
    p {
        margin: 1% 0;
        font-size: 1.4rem;
        line-height: 20%;
    }
}
</style>
