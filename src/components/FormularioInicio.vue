<template>
    <div class="general">
        <form
            action="#"
            method="#"
            @submit.prevent="iniciar"
        >
            <div class="caja">
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
                    value="Iniciar sesión"
                >
                <p
                    class="cursor"
                    @click="registrar"
                >
                    ¿No estás registrado?
                </p>
            </div>
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
    methods: {
        registrar () {
            this.$router.push('/registro');
        },
        iniciar () {
            logearUsuario(this.Usuario, this.Password, this.$router);
        }
    }
};
</script>

<style>
@import '../assets/styles.css';
</style>
