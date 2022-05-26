<template>
    <div class="general">
        <form
            action="#"
            method="#"
            @submit.prevent="reservar"
        >
            <div class="caja">
                <label for="comunidad">Comunidad</label>
                <select
                    id="comunidad"
                    v-model="ComunidadSeleccionada"
                    name="comunidad"
                    required
                    @change="seleccionComunidad"
                >
                    <option
                        v-for="comunidad in comunidades"
                        :key="comunidad.id_comunidad"
                        :value="comunidad.id_comunidad"
                    >
                        {{ comunidad.nombre_comunidad }}
                    </option>
                </select>
                <label for="zona">Zona común</label>
                <select
                    id="zona"
                    v-model="ZonaSeleccionada"
                    name="zona"
                    required
                >
                    <option
                        v-for="zona_comun in zonas_comunes"
                        :key="zona_comun.id_zona"
                        :value="zona_comun.id_zona"
                    >
                        {{ zona_comun.tipo_zona }}
                    </option>
                </select>
                <label for="fecha">Fecha</label>
                <input
                    id="fecha"
                    v-model="FechaSeleccionada"
                    type="date"
                    name="fecha"
                    required
                >
                <label for="horario">Tramo horario</label>
                <select
                    id="horario"
                    v-model="HorarioSeleccionado"
                    name="horario"
                    required
                >
                    <option
                        :value="1"
                    >
                        {{ 'De 10h. a 12h.' }}
                    </option>
                    <option
                        :value="2"
                    >
                        {{ 'De 12h. a 14h.' }}
                    </option>
                    <option
                        :value="3"
                    >
                        {{ 'De 14h. a 16h.' }}
                    </option>
                    <option
                        :value="4"
                    >
                        {{ 'De 16h. a 18h.' }}
                    </option>
                    <option
                        :value="5"
                    >
                        {{ 'De 18h. a 20h.' }}
                    </option>
                    <option
                        :value="6"
                    >
                        {{ 'De 20h. a 22h.' }}
                    </option>
                </select>
                <input
                    type="submit"
                    value="Reservar"
                >
            </div>
        </form>
    </div>
</template>

<script>
import { reservaUsuario, obtenerComunidadesUsuario, obtenerZonasComunesActivas, obtenerUsuarioPorId } from '../services/api-services.js';

export default {
    name: 'FormularioSeleccion',
    data () {
        return {
            ComunidadSeleccionada: '',
            comunidades: [],
            ZonaSeleccionada: '',
            zonas_comunes: [],
            FechaSeleccionada: [],
            HorarioSeleccionado: []
        };
    },
    async created () {
        if (localStorage.usuarioId != null) {
            const datosUsuario = await obtenerUsuarioPorId(localStorage.usuarioId);
            var idRol = datosUsuario.data.data.datos[0].id_rol;
            if (idRol !== '1' && idRol !== '2') {
                alert('No tiene permisos para acceder a esta página');
                this.$router.push('/inicio');
            }
            const { data } = await obtenerComunidadesUsuario(localStorage.usuarioId);
            this.comunidades = data.data.datos;
        } else {
            alert('No tiene permisos para acceder a esta página');
            this.$router.push('/inicio');
        }
    },
    methods: {
        reservar () {
            reservaUsuario(localStorage.usuarioId, this.ZonaSeleccionada, this.FechaSeleccionada, this.HorarioSeleccionado, this.$router);
        },
        async seleccionComunidad (e) {
            const { data } = await obtenerZonasComunesActivas(e.target.value, true);
            this.zonas_comunes = data.data.datos;
        }
    }
};
</script>

<style scoped>
@import '../assets/styles.css';
form {
    height: 54vh;
    margin-top: 0;
}
/*************** Escritorio ***************/
@media only screen and (min-width: 1024px) {
    form {
        height: 55vh;
    }
    input[type=text], input[type=date], select {
        height: 35px;
        margin-bottom: 3%;
    }
    input[type=submit] {
        margin-top: 3%;
    }
}
/************** Pantallas XL **************/
@media only screen and (min-width: 1280px) {
    input[type=submit] {
        margin-top: 8%;
    }
}
</style>
