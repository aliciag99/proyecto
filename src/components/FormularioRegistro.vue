<template>
    <div>
        <form
            action="#"
            method="#"
            @submit.prevent="crear"
        >
            <label for="nombre">Nombre:</label><br>
            <input
                id="nombre"
                v-model="Nombre"
                type="text"
                name="nombre"
                placeholder="Nombre"
            ><br>
            <label for="apellidos">Apellidos:</label><br>
            <input
                id="apellidos"
                v-model="Apellidos"
                type="text"
                name="apellidos"
                placeholder="Apellidos"
            ><br>
            <label for="usuario">Usuario:</label><br>
            <input
                id="usuario"
                v-model="Usuario"
                type="text"
                name="usuario"
                placeholder="Usuario"
            ><br>
            <label for="password">Contraseña:</label><br>
            <input
                id="password"
                v-model="Password"
                type="password"
                name="password"
                placeholder="Contraseña"
            ><br>
            <input
                type="submit"
                value="Crear cuenta"
            >
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormularioRegistro',
    data () {
        return {
            Nombre: '',
            Apellidos: '',
            Usuario: '',
            Password: ''
        };
    },
    methods: {
        crear () {
            this.Nombre = '';
            this.Apellidos = '';
            this.Usuario = '';
            this.Password = '';
        }
    }
};
</script>

<style>

</style>
