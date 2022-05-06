<template>
    <div>
        <form
            action="#"
            method="#"
            @submit.prevent="iniciar"
        >
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
                value="Iniciar sesión"
                @click="logearUsuario"
            >
            <p @click="registrar">
                ¿No estás registrado?
            </p>
        </form>
    </div>
</template>

<script>
import { logearUsuario } from '../services/api-services.js';

export default {
    name: 'FormularioInicio',
    data () {
        return {
            Usuario: '',
            Password: ''
        };
    },
    async created () {
        this.servicios = await logearUsuario(this.Usuario, this.Password);
        console.log(this.servicios);
    },
    methods: {
        // handleSubmit () {},

        registrar () {
            this.$router.push('/registro');
        },
        iniciar () {
            this.Usuario = '';
            this.Password = '';
        }
    }
};
</script>

<style>

</style>
