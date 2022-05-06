<template>
    <div>
        <form
            action="#"
            method="#"
            @submit.prevent="seleccionar"
        >
            <label for="comunidad">Comunidad</label>
            <select
                id="comunidad"
                v-model="ComunidadSeleccionada"
                name="comunidad"
            >
                <option
                    v-for="comunidad in comunidades"
                    :key="comunidad.id"
                    :value="comunidad.nombre"
                >
                    {{ comunidad.nombre }}
                </option>
            </select>
            <br>
            <label for="zona">Zona común</label>
            <select
                id="zona"
                v-model="ZonaSeleccionada"
                name="zona"
            >
                <option
                    v-for="zona_comun in zonas_comunes"
                    :key="zona_comun.id"
                    :value="zona_comun.nombre"
                >
                    {{ zona_comun.nombre }}
                </option>
            </select>
            <br>
            <input
                type="submit"
                value="Seleccionar horario"
            >
        </form>
    </div>
</template>

<script>
// Hay que hacer una conexión a la API para conectar con la base de datos y que se rellenen los value de los dos select, uno con las comunidades y el otro con las zonas comunes de la comunidad elegida
export default {
    name: 'FormularioSeleccion',
    data () {
        return {
            ComunidadSeleccionada: '',
            ZonaSeleccionada: ''
        };
    },
    methods: {
        seleccionar () {
            this.ComunidadSeleccionada = '';
            this.ZonaSeleccionada = '';
        }
    }
};
</script>

<style>

</style>
