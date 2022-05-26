<template>
    <div class="general">
        <p>Selecciona la comunidad e indica la modificación</p>
        <FormularioModificarComunidad />
    </div>
</template>

<script>
import FormularioModificarComunidad from '../components/FormularioModificarComunidad.vue';
export default {
    name: 'ModificarComunidad',
    components: {
        FormularioModificarComunidad
    }
};
</script>

<style scoped>
.general {
    flex-direction: column;
    text-align: center;
    margin-top: 0;
}
p {
    padding: 0 40px;
}
/**************** Tablets ****************/
@media only screen and (min-width: 768px) {
    p {
        font-size: 1.5rem;
        padding: 30px 110px;
        line-height: 140%;
    }
}
/*************** Escritorio ***************/
@media only screen and (min-width: 1024px) {
    p {
        margin: 0;
        font-size: 1.2rem;
        line-height: 20%;
        padding: 25px 90px;
    }
}
/************** Pantallas XL **************/
@media only screen and (min-width: 1280px) {
    p {
        margin: 1% 0;
        font-size: 1.4rem;
        line-height: 100%;
    }
}
</style>
