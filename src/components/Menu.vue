<template>
    <div class="menu">
        <div class="spatia">
            <router-link
                to="/"
                tag="span"
                class="logo"
            >
                S
            </router-link>
            <router-link
                to="/"
                tag="span"
                class="mano"
            >
                Spatia
            </router-link>
        </div>
        <router-link
            to=""
            tag="span"
            class="zonas"
        >
            Sistema de reservas de zonas comunes
        </router-link>
        <div
            class="cierre"
            title="Cerrar sesión"
            @click="cierreSesion"
        >
            l
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    methods: {
        cierreSesion () {
            localStorage.removeItem('usuarioId');
            this.$router.push('/');
        }
    }
};
</script>

<style>
.menu {
    background-color: #212529;
    color: #f8f8f8;
    height: 135px;
    font-size: 1.2rem;
    line-height: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px 0px 20px 25px;
}
.spatia {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.mano {
    cursor: pointer;
    font-size: 1.8rem;
    margin-left: 10px;
}
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 5px;
    border-style: double;
    border-radius: 10px;
    width: 35px;
    height: 35px;
    font-size: 2.2rem;
    font-weight: 500;
    padding-bottom: 4px;
    cursor: pointer;
}
.cierre {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 10px;
    width: 20px;
    height: 20px;
    border: 2px solid #f8f8f8;
    border-radius: 50%;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    left: 88%;
    top: 3%;
    position: absolute;
}
/**************** Tablets ****************/
@media only screen and (min-width: 768px) {
    .menu {
        flex-direction: row;
        align-items: center;
        font-size: 1.8rem;
        line-height: 50px;
    }
    .mano {
        font-size: 2.4rem;
    }
    .cierre {
        position: static;
    }
}
/*************** Escritorio ***************/
@media only screen and (min-width: 1024px) {
    .menu {
        flex-direction: row;
        align-items: center;
        font-size: 1.8rem;
        padding: 0;
    }
}
</style>
