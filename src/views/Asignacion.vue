<template>
    <div class="general">
        <p>Selecciona un usuario para asignarle comunidad</p>
        <FormularioAsignacion />
    </div>
</template>

<script>
import FormularioAsignacion from '../components/FormularioAsignacion.vue';
export default {
    name: 'Asignacion',
    components: {
        FormularioAsignacion
    }
};
</script>

<style scoped>
.general {
    flex-direction: column;
    text-align: center;
    padding: 0 17px;
    margin-top: 0;
}
p {
    margin-top: 4%;
    margin-bottom: 0;
}
/**************** Tablets ****************/
@media only screen and (min-width: 768px) {
    p {
        font-size: 1.5rem;
        padding: 20px 90px 45px 90px;
        line-height: 100%;
    }
}
/*************** Escritorio ***************/
@media only screen and (min-width: 1024px) {
    p {
        margin: 0;
        font-size: 1.2rem;
        line-height: 20%;
        padding: 20px 90px;
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
