<template>
    <div class="general">
        <form
            action="#"
            method="#"
            @submit.prevent="asignar"
        >
            <div class="caja">
                <label for="usuario_asignado">Listado de usuarios</label>
                <select
                    id="usuario_asignado"
                    v-model="UsuarioAsignado"
                    name="usuario_asignado"
                    required
                >
                    <option
                        v-for="usuario in usuarios"
                        :key="usuario.id_usuario"
                        :value="usuario.id_usuario"
                    >
                        {{ usuario.nombre_apellidos }}
                    </option>
                </select>
                <label for="comunidad_asignada">Listado de comunidades</label>
                <select
                    id="comunidad_asignada"
                    v-model="ComunidadAsignada"
                    name="comunidad_asignada"
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
                    value="Alta usuario"
                >
                <div>
                    <button @click="ir_alta_comunidad">
                        Ir a alta comunidad
                    </button>
                    <button @click="ir_alta_zona_comun">
                        Ir a alta zona común
                    </button>
                    <button @click="ir_modificar_comunidad">
                        Ir a modificar comunidad
                    </button>
                    <button @click="ir_modificar_zona_comun">
                        Ir a modificar zona común
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { obtenerUsuarios, obtenerComunidades, altaUsuarioComunidad, obtenerUsuarioPorId } from '../services/api-services.js';

export default {
    name: 'FormularioAsignacion',
    data () {
        return {
            UsuarioAsignado: '',
            ComunidadAsignada: '',
            usuarios: [],
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
            const { data } = await obtenerUsuarios();
            this.usuarios = data.data.datos;
            const dataAux = await obtenerComunidades();
            this.comunidades = dataAux.data.data.datos;
        } else {
            alert('No tiene permisos para acceder a esta página');
            this.$router.push('/inicio');
        }
    },
    methods: {
        ir_alta_comunidad () {
            this.$router.push('/alta_comunidad');
        },
        ir_alta_zona_comun () {
            this.$router.push('/alta_zona_comun');
        },
        ir_modificar_comunidad () {
            this.$router.push('/modificar_comunidad');
        },
        ir_modificar_zona_comun () {
            this.$router.push('/modificar_zona_comun');
        },
        asignar () {
            altaUsuarioComunidad(this.UsuarioAsignado, this.ComunidadAsignada);
        }
    }
};
</script>

<style scoped>
@import '../assets/styles.css';
.general {
    height: 60vh;
}
form {
    height: 56vh;
}
input[type=submit] {
    margin-top: 4%;
}
button {
    background-color: #dbdbdb;
    color: #212529;
    font-weight: 550;
    margin-top: 8%;
    width: 50vw;
    height: 30px;
}
select {
    width: 50vw;
}
label {
    margin-left: 6px;
}
/**************** Tablets ****************/
@media only screen and (min-width: 768px) {
    form {
    height: 63vh;
    }
    input[type=submit] {
        margin-bottom: 10%;
        margin-top: 4%;
    }
    button {
        width: 30vw;
        margin-top: 10%;
        height: 40px;
    }
    select {
        width: 31vw;
    }
    label {
        margin-left: 2px;
    }
}
/*************** Escritorio ***************/
@media only screen and (min-width: 1024px) {
    form {
        height: 65vh;
    }
    input[type=submit] {
        width: 150px;
        font-size: 0.9rem;
        margin-bottom: 0;
    }
    button, select {
        margin: 3% 0 1% 0;
        width: 20vw;
        font-size: 0.9rem;
        height: 35px;
    }
    label {
        margin-left: 0;
}
}
/************** Pantallas XL **************/
@media only screen and (min-width: 1280px) {
    form {
        height: 65vh;
    }
    .caja {
        padding-top: 1%;
    }
    input[type=submit] {
        margin-bottom: 10%;
    }
    button, select {
        margin-bottom: 5%;
        width: 250px;
    }
    button {
        margin: 8% 0;
        font-size: 1rem;
    }
}
</style>
