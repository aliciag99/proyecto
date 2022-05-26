<template>
    <div class="general">
        <form
            action="#"
            method="#"
            @submit.prevent="alta"
        >
            <div class="caja">
                <label for="alta_comunidad">Alta de comunidad</label>
                <input
                    id="alta_comunidad"
                    v-model="AltaComunidad"
                    type="text"
                    name="alta_comunidad"
                    placeholder="Nombre nueva comunidad"
                    required
                >
                <input
                    type="submit"
                    value="Alta"
                >
            </div>
        </form>
    </div>
</template>

<script>
import { altaComunidad, obtenerUsuarioPorId } from '../services/api-services.js';

export default {
    name: 'FormularioAltaComunidad',
    data () {
        return {
            AltaComunidad: ''
        };
    },
    async created () {
        if (localStorage.usuarioId != null) {
            const datosUsuario = await obtenerUsuarioPorId(localStorage.usuarioId);
            var idRol = datosUsuario.data.data.datos[0].id_rol;
            if (idRol !== '2') {
                alert('No tiene permisos para acceder a esta página');
                this.$router.push('/inicio');
            }
        } else {
            alert('No tiene permisos para acceder a esta página');
            this.$router.push('/inicio');
        }
    },
    methods: {
        alta () {
            altaComunidad(this.AltaComunidad, '1');
        }
    }
};
</script>

<style scoped>
@import '../assets/styles.css';
form {
    height: 50vh;
}
input[type=text] {
        width: 50vw;
        height: 35px;
        margin-top: 5%;
}
input[type=submit] {
    margin-top: 8%;
}
/**************** Tablets ****************/
@media only screen and (min-width: 768px) {
    form {
        height: 55vh;
    }
    input[type=text] {
        width: 40vw;
        height: 40px;
        margin-top: 5%;
    }
}
/*************** Escritorio ***************/
@media only screen and (min-width: 1024px) {
    form {
        height: 55vh;
    }
    input[type=text] {
        width: 250px;
    }
}
/************** Pantallas XL **************/
@media only screen and (min-width: 1280px) {
    form {
        height: 50vh;
    }
}
</style>
