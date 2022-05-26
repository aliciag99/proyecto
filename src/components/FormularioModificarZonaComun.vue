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
                    @change="seleccionZonaComun"
                >
                    <option
                        v-for="zona_comun in zonas_comunes"
                        :key="zona_comun.id_zona"
                        :value="zona_comun.id_zona"
                    >
                        {{ zona_comun.tipo_zona }}
                    </option>
                </select>
                <label for="estado">Estado</label>
                <input
                    id="estado"
                    v-model="Estado"
                    type="text"
                    name="estado"
                    placeholder="Estado zona común"
                    required
                >
                <label for="tipo">Tipo</label>
                <input
                    id="tipo"
                    v-model="Tipo"
                    type="text"
                    name="tipo"
                    placeholder="Tipo zona común"
                    required
                >
                <label for="descripcion">Descripción</label>
                <textarea
                    id="descripcion"
                    v-model="Descripcion"
                    rows="4"
                    cols="32"
                    name="descripcion"
                    placeholder="Descripcion zona común"
                    required
                />
                <input
                    type="submit"
                    value="Modificar"
                >
            </div>
        </form>
    </div>
</template>

<script>
import { obtenerComunidades, obtenerZonasComunes, obtenerZonasComunesPorIdZona, modificarZonaComun, obtenerUsuarioPorId } from '../services/api-services.js';

export default {
    name: 'FormularioModificarZonaComun',
    data () {
        return {
            ComunidadSeleccionada: '',
            comunidades: [],
            ZonaSeleccionada: '',
            zonas_comunes: [],
            Estado: '',
            Tipo: '',
            Descripcion: ''
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
        async seleccionComunidad () {
            const { data } = await obtenerZonasComunes(this.ComunidadSeleccionada);
            this.zonas_comunes = data.data.datos;
        },
        async seleccionZonaComun () {
            const { data } = await obtenerZonasComunesPorIdZona(this.ComunidadSeleccionada, this.ZonaSeleccionada);
            this.Estado = data.data.datos[0].estado_zona;
            this.Tipo = data.data.datos[0].tipo_zona;
            this.Descripcion = data.data.datos[0].descripcion_zona;
        },
        modificar () {
            modificarZonaComun(this.ZonaSeleccionada, this.Estado, this.Tipo, this.Descripcion, this.ComunidadSeleccionada);
        }
    }
};
</script>

<style scoped>
@import '../assets/styles.css';
form {
    height: 52vh;
    padding: 3% 0 2% 0;
}
input[type=text], select {
    margin-bottom: 1%;
}
input[type=submit] {
    height: 30px;
}
#descripcion {
    height: 30px;
}
/**************** Tablets ****************/
@media only screen and (min-width: 768px) {
    form {
        height: 60vh;
    }
    input[type=text], select {
        width: 40vw;
        height: 40px;
        margin-bottom: 3%;
    }
    #descripcion {
        height: 70px;
    }
    input[type=submit], button {
        height: 40px;
    }
}
/*************** Escritorio ***************/
@media only screen and (min-width: 1024px) {
    form {
        height: 55vh;
    }
    input[type=submit] {
        margin-top: 0;
        height: 30px;
    }
    input[type=text] {
        width: 20vw;
        height: 28px;
        margin: 0;
    }
    select {
        width: 21vw;
        height: 31px;
        margin: 0;
    }
}
/************** Pantallas XL **************/
@media only screen and (min-width: 1280px) {
    input[type=text], select {
        width: 250px;
        margin: 4% 0 2% 0;
    }
    input[type=submit] {
        margin-top: 8%;
    }
    input[type=submit], button {
        height: 40px;
    }
    select {
        width: 254px;
    }
}
</style>
