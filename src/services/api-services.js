import axios from 'axios';

export const logearUsuario = async (Usuario, Password, Route) => {
    const response = await axios.post('http://localhost/api/?servicio=login', {
        login: Usuario,
        password: Password
    });
    if (response.data.data.resultado === 'ok') {
        localStorage.usuarioId = response.data.data.id;
        // Comprobamos si el login es de un administrador o un usuario
        if (response.data.data.id_rol !== '2') {
            // Comprobamos si el usuario tiene comunidades asignadas para elegir la vista
            const responseAux = await axios.post('http://localhost/api/?servicio=obtener_comunidades_usuario', {
                id_usuario: response.data.data.id
            });
            if (responseAux.data.data.resultado === 'ok') {
                Route.push('/seleccion');
            } else {
                Route.push('/bienvenida');
            }
        } else {
            Route.push('/asignacion');
        }
    } else {
        if (response.data.data.resultado === 'no_ok') {
            alert('Usuario no encontrado');
        }
    }
};

export const registrarUsuario = async (Nombre, Apellidos, Usuario, Password, Route) => {
    const response = await axios.post('http://localhost/api/?servicio=registrar_usuario', {
        nombre: Nombre,
        apellidos: Apellidos,
        login: Usuario,
        password: Password
    });
    if (response.data.data.resultado === 'ok') {
        localStorage.usuarioId = response.data.data.id;
        Route.push('/bienvenida');
    } else {
        if (response.data.data.resultado === 'login_usuario_ya_existe') {
            alert('Los datos introducidos ya se encuentran en nuestra base de datos');
        } else if (response.data.data.resultado === 'no_ok') {
            alert('Ha ocurrido un error, inténtelo de nuevo o contacte con un administrador');
        }
    }
};

export const reservaUsuario = async (Usuario, Zona, Fecha, Tramo, Route) => {
    const response = await axios.post('http://localhost/api/?servicio=alta_reserva', {
        id_usuario: Usuario,
        id_zona_comun: Zona,
        fecha: Fecha,
        tramo_horario: Tramo
    });
    if (response.data.data.resultado === 'ok') {
        Route.push('/confirmacion');
    } else {
        if (response.data.data.resultado === 'reserva_existe') {
            alert('Ya existe una reserva para esa fecha y tramo');
        } else if (response.data.data.resultado === 'no_ok') {
            alert('Ha ocurrido un error, inténtelo de nuevo o contacte con un administrador');
        }
    }
};

export const altaComunidad = async (Nombre, idAdministrador) => {
    const response = await axios.post('http://localhost/api/?servicio=alta_comunidad', {
        nombre: Nombre,
        id_administrador: idAdministrador
    });
    if (response.data.data.resultado === 'ok') {
        alert('Comunidad dada de alta correctamente');
    } else {
        if (response.data.data.resultado === 'no_ok') {
            alert('Ha ocurrido un error, inténtelo de nuevo o contacte con un administrador');
        }
    }
};

export const obtenerComunidades = async () => {
    const { data } = await axios.post('http://localhost/api/?servicio=obtener_comunidades', {
    });
    if (data.data.resultado === 'ok') {

    } else {
        if (data.data.data.resultado === 'no_ok') {
            alert('Ha ocurrido un error, inténtelo de nuevo o contacte con un administrador');
        }
    }

    return { data };
};

export const obtenerComunidad = async (IdComunidad) => {
    const { data } = await axios.post('http://localhost/api/?servicio=obtener_comunidades', {
        id_comunidad: IdComunidad
    });
    if (data.data.resultado === 'ok') {

    } else {
        if (data.data.data.resultado === 'no_ok') {
            alert('Ha ocurrido un error, inténtelo de nuevo o contacte con un administrador');
        }
    }

    return { data };
};

export const obtenerZonasComunes = async (IdComunidad) => {
    const { data } = await axios.post('http://localhost/api/?servicio=obtener_zonas_comunes', {
        id_comunidad: IdComunidad
    });
    if (data.data.resultado === 'ok') {

    } else {
        if (data.data.data.resultado === 'no_ok') {
            alert('Ha ocurrido un error, inténtelo de nuevo o contacte con un administrador');
        }
    }

    return { data };
};

export const obtenerZonasComunesActivas = async (IdComunidad, EstadoZonaActiva) => {
    const { data } = await axios.post('http://localhost/api/?servicio=obtener_zonas_comunes', {
        id_comunidad: IdComunidad,
        estado_zona_activa: EstadoZonaActiva
    });
    if (data.data.resultado === 'ok') {

    } else {
        if (data.data.data.resultado === 'no_ok') {
            alert('Ha ocurrido un error, inténtelo de nuevo o contacte con un administrador');
        }
    }

    return { data };
};

export const obtenerZonasComunesPorIdZona = async (IdComunidad, IdZonaComun) => {
    const { data } = await axios.post('http://localhost/api/?servicio=obtener_zonas_comunes', {
        id_comunidad: IdComunidad,
        id_zona_comun: IdZonaComun
    });
    if (data.data.resultado === 'ok') {

    } else {
        if (data.data.data.resultado === 'no_ok') {
            alert('Ha ocurrido un error, inténtelo de nuevo o contacte con un administrador');
        }
    }

    return { data };
};

export const obtenerUsuarios = async () => {
    const { data } = await axios.post('http://localhost/api/?servicio=obtener_usuarios', {
    });
    if (data.data.resultado === 'ok') {

    } else {
        if (data.data.data.resultado === 'no_ok') {
            alert('Ha ocurrido un error, inténtelo de nuevo o contacte con un administrador');
        }
    }

    return { data };
};

export const obtenerUsuarioPorId = async (IdUsuario) => {
    const { data } = await axios.post('http://localhost/api/?servicio=obtener_usuarios', {
        id_usuario: IdUsuario
    });
    if (data.data.resultado === 'ok') {

    } else {
        if (data.data.data.resultado === 'no_ok') {
            alert('Ha ocurrido un error, inténtelo de nuevo o contacte con un administrador');
        }
    }

    return { data };
};

export const obtenerComunidadesUsuario = async (IdUsuario) => {
    const { data } = await axios.post('http://localhost/api/?servicio=obtener_comunidades_usuario', {
        id_usuario: IdUsuario
    });
    if (data.data.resultado === 'ok') {

    } else {
        if (data.data.data.resultado === 'no_ok') {
            alert('Ha ocurrido un error, inténtelo de nuevo o contacte con un administrador');
        }
    }

    return { data };
};

export const altaZonaComun = async (Estado, Tipo, Descripcion, idComunidad) => {
    const response = await axios.post('http://localhost/api/?servicio=alta_zona_comun', {
        estado: Estado,
        tipo: Tipo,
        descripcion: Descripcion,
        id_comunidad: idComunidad
    });
    if (response.data.data.resultado === 'ok') {
        alert('Zona comun dada de alta correctamente');
    } else {
        if (response.data.data.resultado === 'no_ok') {
            alert('Ha ocurrido un error, inténtelo de nuevo o contacte con un administrador');
        }
    }
};

export const altaUsuarioComunidad = async (IdUsuario, IdComunidad) => {
    const response = await axios.post('http://localhost/api/?servicio=asignar_usuario_comunidad', {
        id_usuario: IdUsuario,
        id_comunidad: IdComunidad
    });
    if (response.data.data.resultado === 'ok') {
        alert('Usuario dado de alta correctamente en la comunidad');
    } else {
        if (response.data.data.resultado === 'usuario_ya_asignado_a_comunidad') {
            alert('El usuario ya está dado de alta en la comunidad seleccionada');
        } else if (response.data.data.resultado === 'no_ok') {
            alert('Ha ocurrido un error, inténtelo de nuevo o contacte con un administrador');
        }
    }
};

export const modificarComunidad = async (IdComunidad, NombreComunidad, IdAdministrador) => {
    const response = await axios.post('http://localhost/api/?servicio=modificar_comunidad', {
        id_comunidad: IdComunidad,
        nombre_comunidad: NombreComunidad,
        id_administrador: IdAdministrador
    });
    if (response.data.data.resultado === 'ok') {
        alert('Modificación correcta de la comunidad');
    } else {
        if (response.data.data.resultado === 'no_ok') {
            alert('Ha ocurrido un error, inténtelo de nuevo o contacte con un administrador');
        }
    }
};

export const modificarZonaComun = async (IdZonaComun, EstadoZonaComun, TipoZonaComun, DescripcionZonaComun, IdComunidad) => {
    const response = await axios.post('http://localhost/api/?servicio=modificar_zona_comun', {
        id_zona_comun: IdZonaComun,
        estado_zona: EstadoZonaComun,
        tipo_zona: TipoZonaComun,
        descripcion_zona: DescripcionZonaComun,
        id_comunidad: IdComunidad
    });
    if (response.data.data.resultado === 'ok') {
        alert('Zona comun modificada correctamente');
    } else {
        if (response.data.data.resultado === 'no_ok') {
            alert('Ha ocurrido un error, inténtelo de nuevo o contacte con un administrador');
        }
    }
};
