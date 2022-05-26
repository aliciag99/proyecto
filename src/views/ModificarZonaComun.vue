<template>
    <div class="general">
        <p>Selecciona la comunidad y la zona común e indica las modificaciones</p>
        <FormularioModificarZonaComun />
    </div>
</template>

<script>
import FormularioModificarZonaComun from '../components/FormularioModificarZonaComun.vue';
export default {
    name: 'ModificarZonaComun',
    components: {
        FormularioModificarZonaComun
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
    padding: 0 15px;
}
/**************** Tablets ****************/
@media only screen and (min-width: 768px) {
    p {
        font-size: 1.5rem;
        padding: 10px 110px;
        line-height: 140%;
        margin: 20px 0;
    }
}
/*************** Escritorio ***************/
@media only screen and (min-width: 1024px) {
    p {
        margin: 0;
        font-size: 1.1rem;
        line-height: 20%;
        padding: 16px 30px;
    }
}
/************** Pantallas XL **************/
@media only screen and (min-width: 1280px) {
    p {
        margin: 1% 0;
        font-size: 1.4rem;
        line-height: 100%;
        padding: 20px 90px;
    }
}
</style>
