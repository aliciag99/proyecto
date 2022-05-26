import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Inicio from '../views/Inicio.vue';
import Registro from '../views/Registro.vue';
import Bienvenida from '../views/Bienvenida.vue';
import Seleccion from '../views/Seleccion.vue';
import Asignacion from '../views/Asignacion.vue';
import AltaComunidad from '../views/AltaComunidad.vue';
import AltaZonaComun from '../views/AltaZonaComun.vue';
import Confirmacion from '../views/Confirmacion.vue';
import ModificarComunidad from '../views/ModificarComunidad.vue';
import ModificarZonaComun from '../views/ModificarZonaComun.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/inicio',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/registro',
        name: 'Registro',
        component: Registro
    },
    {
        path: '/bienvenida',
        name: 'Bienvenida',
        component: Bienvenida
    },
    {
        path: '/seleccion',
        name: 'Seleccion',
        component: Seleccion
    },
    {
        path: '/asignacion',
        name: 'Asignacion',
        component: Asignacion
    },
    {
        path: '/alta_comunidad',
        name: 'AltaComunidad',
        component: AltaComunidad
    },
    {
        path: '/alta_zona_comun',
        name: 'AltaZonaComun',
        component: AltaZonaComun
    },
    {
        path: '/confirmacion',
        name: 'Confirmacion',
        component: Confirmacion
    },
    {
        path: '/modificar_comunidad',
        name: 'ModificarComunidad',
        component: ModificarComunidad
    },
    {
        path: '/modificar_zona_comun',
        name: 'ModificarZonaComun',
        component: ModificarZonaComun
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
