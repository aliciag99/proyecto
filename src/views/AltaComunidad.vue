<template>
    <div class="general">
        <p>Escribe el nombre de la nueva comunidad para insertarla en el sistema</p>
        <FormularioAltaComunidad />
    </div>
</template>

<script>
import FormularioAltaComunidad from '../components/FormularioAltaComunidad.vue';
export default {
    name: 'AltaComunidad',
    components: {
        FormularioAltaComunidad
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
    padding: 0 30px;
}
/**************** Tablets ****************/
@media only screen and (min-width: 768px) {
    .general {
        font-size: 1.4rem;
    }
    p {
        font-size: 1.5rem;
        padding: 20px 110px;
        line-height: 140%;
    }
}
/*************** Escritorio ***************/
@media only screen and (min-width: 1024px) {
    .general {
        font-size: 1.1rem;
    }
    p {
        margin: 0;
        font-size: 1.1rem;
        line-height: 20%;
        padding: 20px 90px 20px 90px;
    }
}
/************** Pantallas XL **************/
@media only screen and (min-width: 1280px) {
    p {
        margin: 1% 0;
        font-size: 1.4rem;
        line-height: 100%;
        padding: 30px 90px;
    }
}
</style>
