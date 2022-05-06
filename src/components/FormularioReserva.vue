<template>
    <div>
        <form
            action="#"
            method="#"
            @submit.prevent="reservar"
        >
            <label for="fecha">Fecha</label>
            <input
                id="fecha"
                v-model="FechaSeleccionada"
                type="date"
                name="fecha"
            >
            <br>
            <label for="horario">Tramo horario</label>
            <select
                id="horario"
                v-model="HorarioSeleccionado"
                name="horario"
            >
                <option
                    :value="1"
                >
                    {{ 'De 10h. a 12h.' }}
                </option>
                <option
                    :value="2"
                >
                    {{ 'De 12h. a 14h.' }}
                </option>
                <option
                    :value="3"
                >
                    {{ 'De 14h. a 16h.' }}
                </option>
                <option
                    :value="4"
                >
                    {{ 'De 16h. a 18h.' }}
                </option>
                <option
                    :value="5"
                >
                    {{ 'De 18h. a 20h.' }}
                </option>
                <option
                    :value="6"
                >
                    {{ 'De 20h. a 22h.' }}
                </option>
            </select>
            <br>
            <input
                type="submit"
                value="Reservar"
            >
        </form>
    </div>
</template>

<script>
// Hay que hacer una conexión a la API para conectar con la base de datos y que se rellenen los tramos horarios (con sus id?)
export default {
    name: 'FormularioReserva',
    data () {
        return {
            FechaSeleccionada: '',
            HorarioSeleccionado: ''
        };
    },
    methods: {
        reservar () {
            this.FechaSeleccionada = '';
            this.HorarioSeleccionado = '';
        }
    }

};
</script>

<style>

</style>
