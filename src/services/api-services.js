import axios from 'axios';

export const logearUsuario = async (Usuario, Password) => {
    alert('funciona');
    const response = await axios.post('http://localhost/api/?servicio=login', {
        login: Usuario,
        password: Password
    });
    if (response.data.data.resultado === 'ok') {
        console.log('Usuario encontrado');
    } else {
        if (response.data.data.resultado === 'no_ok') {
            console.log('Usuario no encontrado');
        }
    }
};
