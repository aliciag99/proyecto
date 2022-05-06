import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Inicio from '../views/Inicio.vue';
import Registro from '../views/Registro.vue';
import Bienvenida from '../views/Bienvenida.vue';
import Seleccion from '../views/Seleccion.vue';
import Asignacion from '../views/Asignacion.vue';
import Alta from '../views/Alta.vue';
import Reserva from '../views/Reserva.vue';
import Confirmacion from '../views/Confirmacion.vue';

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
        path: '/alta',
        name: 'Alta',
        component: Alta
    },
    {
        path: '/reserva',
        name: 'Reserva',
        component: Reserva
    },
    {
        path: '/confirmacion',
        name: 'Confirmacion',
        component: Confirmacion
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
