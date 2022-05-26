<template>
    <div class="general">
        <p>Escribe los datos de la nueva zona común para insertarlos en el sistema</p>
        <FormularioAltaZonaComun />
    </div>
</template>

<script>
import FormularioAltaZonaComun from '../components/FormularioAltaZonaComun.vue';
export default {
    name: 'AltaZonaComun',
    components: {
        FormularioAltaZonaComun
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
    p {
        font-size: 1.5rem;
        padding: 20px 110px;
        line-height: 140%;
    }
}
/*************** Escritorio ***************/
@media only screen and (min-width: 1024px) {
    p {
        margin: 0;
        font-size: 1.1rem;
        line-height: 20%;
        padding: 20px 90px;
    }
}
/************** Pantallas XL **************/
@media only screen and (min-width: 1280px) {
    p {
        margin: 1% 0;
        font-size: 1.4rem;
        line-height: 30%;
        padding: 25px 90px 30px 90px;
    }
}
</style>
