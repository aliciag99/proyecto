<template>
    <div class="general">
        <form
            action="#"
            method="#"
            @submit.prevent="alta"
        >
            <div class="caja">
                <label for="tipo">Tipo</label>
                <input
                    id="tipo"
                    v-model="Tipo"
                    type="text"
                    name="tipo"
                    placeholder="Tipo nueva zona"
                    required
                >
                <label for="descripcion">Descripción</label>
                <input
                    id="descripcion"
                    v-model="Descripcion"
                    type="text"
                    name="descripcion"
                    placeholder="Descripcion nueva zona"
                    required
                >
                <label for="comunidad">Comunidad</label>
                <select
                    id="comunidad"
                    v-model="ComunidadSeleccionada"
                    name="comunidad"
                    required
                >
                    <option
                        v-for="comunidad in comunidades"
                        :key="comunidad.id_comunidad"
                        :value="comunidad.id_comunidad"
                    >
                        {{ comunidad.nombre_comunidad }}
                    </option>
                </select>
                <input
                    type="submit"
                    value="Alta"
                >
            </div>
        </form>
    </div>
</template>

<script>
import { obtenerComunidades, altaZonaComun, obtenerUsuarioPorId } from '../services/api-services.js';

export default {
    name: 'FormularioAltaZonaComun',
    data () {
        return {
            Tipo: '',
            Descripcion: '',
            ComunidadSeleccionada: '',
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
        alta () {
            altaZonaComun('1', this.Tipo, this.Descripcion, this.ComunidadSeleccionada);
        }
    }
};
</script>

<style scoped>
@import '../assets/styles.css';
/**************** Tablets ****************/
@media only screen and (min-width: 768px) {
    form {
        height: 60vh;
    }
    input[type=text] {
        width: 40vw;
        margin-bottom: 8%;
    }
    select {
        width: 41vw;
        height: 45px;
    }
}
/*************** Escritorio ***************/
@media only screen and (min-width: 1024px) {
    form {
        height: 59vh;
    }
    input[type=text], select {
        width: 20vw;
        margin: 3% 0 7% 0;
    }
    select {
        height: 35px;
    }
}
/************** Pantallas XL **************/
@media only screen and (min-width: 1280px) {
    form {
        height: 53vh;
    }
    input[type=text] {
        width: 250px;
    }
    select {
        height: 38px;
        width: 255px;
    }
    input[type=submit] {
        margin-top: 0;
    }
}
</style>
