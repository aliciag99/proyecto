<template>
    <div class="general">
        <form
            action="#"
            method="#"
            @submit.prevent="crear"
        >
            <div class="caja">
                <label for="nombre">Nombre</label>
                <input
                    id="nombre"
                    v-model="Nombre"
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    required
                >
                <label for="apellidos">Apellidos</label>
                <input
                    id="apellidos"
                    v-model="Apellidos"
                    type="text"
                    name="apellidos"
                    placeholder="Apellidos"
                    required
                >
                <label for="usuario">Usuario</label>
                <input
                    id="usuario"
                    v-model="Usuario"
                    type="text"
                    name="usuario"
                    placeholder="Usuario"
                    required
                >
                <label for="password">Contraseña</label>
                <input
                    id="password"
                    v-model="Password"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    required
                >
                <input
                    type="submit"
                    value="Crear cuenta"
                >
            </div>
        </form>
    </div>
</template>

<script>
import { registrarUsuario } from '../services/api-services.js';

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
            registrarUsuario(this.Nombre, this.Apellidos, this.Usuario, this.Password, this.$router);
        }
    }
};
</script>

<style scoped>
@import '../assets/styles.css';
</style>
