<template>
    <div class="general">
        <form
            action="#"
            method="#"
            @submit.prevent="modificar"
        >
            <div class="caja">
                <label for="comunidad">Comunidad</label>
                <select
                    id="comunidad"
                    v-model="ComunidadSeleccionada"
                    name="comunidad"
                    required
                    @change="modificacionComunidad"
                >
                    <option
                        v-for="comunidad in comunidades"
                        :key="comunidad.id_comunidad"
                        :value="comunidad.id_comunidad"
                    >
                        {{ comunidad.nombre_comunidad }}
                    </option>
                </select>
                <label for="nombre_comunidad">Nombre comunidad</label>
                <input
                    id="nombre_comunidad"
                    v-model="NombreComunidad"
                    type="text"
                    name="nombre_comunidad"
                    required
                >
                <input
                    type="submit"
                    value="Modificar"
                >
            </div>
        </form>
    </div>
</template>

<script>
import { obtenerComunidades, obtenerComunidad, modificarComunidad, obtenerUsuarioPorId } from '../services/api-services.js';

export default {
    name: 'FormularioModificarComunidad',
    data () {
        return {
            ComunidadSeleccionada: '',
            NombreComunidad: '',
            comunidades: []
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
            const { data } = await obtenerComunidades();
            this.comunidades = data.data.datos;
        } else {
            alert('No tiene permisos para acceder a esta página');
            this.$router.push('/inicio');
        }
    },
    methods: {
        async modificacionComunidad () {
            const { data } = await obtenerComunidad(this.ComunidadSeleccionada);
            this.NombreComunidad = data.data.datos[0].nombre_comunidad;
        },
        modificar () {
            modificarComunidad(this.ComunidadSeleccionada, this.NombreComunidad, 1);
        }
    }
};
</script>

<style scoped>
@import '../assets/styles.css';
input[type=text] {
    width: 50vw;
    margin-bottom: 8%;
}
select {
    width: 51vw;
    height: 35px;
    margin-bottom: 8%;
}
/**************** Tablets ****************/
@media only screen and (min-width: 768px) {
    input[type=text] {
        width: 40vw;
        margin-bottom: 8%;
    }
    select {
        width: 41vw;
        height: 43px;
        margin-bottom: 8%;
    }
}
/*************** Escritorio ***************/
@media only screen and (min-width: 1024px) {
    input[type=text] {
        width: 20vw;
    }
    select {
        height: 33px;
        width: 21vw;
    }
}
/************** Pantallas XL **************/
@media only screen and (min-width: 1280px) {
    form {
        height: 48vh;
    }
    input[type=text], select {
        width: 250px;
    }
    select {
        height: 39px;
        width: 255px;
    }
}
</style>
