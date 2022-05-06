<template>
    <div>
        <form
            action="#"
            method="#"
            @submit.prevent="asignar"
        >
            <label for="usuario_asignado">Listado de usuarios</label>
            <select
                id="usuario_asignado"
                v-model="UsuarioAsignado"
                name="usuario_asignado"
            >
                <option
                    v-for="usuario in usuarios"
                    :key="usuario.id"
                    :value="usuario.id"
                >
                    {{ usuario.nombre_completo }}
                </option>
            </select>
            <br>
            <label for="comunidad_asignada">Listado de comunidades</label>
            <select
                id="comunidad_asignada"
                v-model="ComunidadAsignada"
                name="comunidad_asignada"
            >
                <option
                    v-for="comunidad in comunidades"
                    :key="comunidad.id"
                    :value="comunidad.id"
                >
                    {{ comunidad.nombre }}
                </option>
            </select>
            <br>
            <input
                type="submit"
                value="Alta usuario"
            >
        </form>
    </div>
</template>

<script>
// Hay que hacer una conexión a la API para conectar con la base de datos y que se rellenen los value de los dos select, uno con nombres completos de los usuarios y el otro con las comunidades
export default {
    name: 'FormularioAsignacion',
    data () {
        return {
            UsuarioAsignado: '',
            ComunidadAsignada: ''
        };
    },
    methods: {
        asignar () {
            this.UsuarioAsignado = '';
            this.ComunidadAsignada = '';
        }
    }
};
</script>

<style>

</style>
