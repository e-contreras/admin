import {
    baseURLServer,
    segundosTimeoutPeticionesAjax
} from './opcionesApp';
import $ from 'jquery';

const uriProyectosXRecurso = "/recurso/proyecto/";
const uriTareasXProyectosXRecurso = "/recurso/tarea/";
const uriTareasSemanales = "/recurso/tareasSemanales/";

const errorEnSolicitud = "Lamentablemente ocurrió un error en la solicitud";

export function getProyectosRecurso(recursoCod, setState, notify, ordenarProyectos) {
    setState({
        loading: true
    });
    $.ajax({
        type: "GET",
        url: baseURLServer + uriProyectosXRecurso + recursoCod,
        success: function(res) {
            console.log(res);
            setState({ loading: false, proyectosRecurso: res });
        },
        error: function(xhr, status, err) {
            setState({ loading: false, proyectosRecurso: [] });
            notify.show(errorEnSolicitud, "error");
        },
        timeout: segundosTimeoutPeticionesAjax
    });
}

export function getTareasDeProyecto(recursoCod, proyectoSelected, setState, ordenarTareas, notify) {
    setState({
        loading: true
    });
    $.ajax({
        type: "GET",
        url: baseURLServer + uriTareasXProyectosXRecurso + recursoCod + '/' + proyectoSelected.proyectoCodigo,
        success: function(res) {
            res = ordenarTareas(res);
            setState({
                tareasProyecto: res,
                loading: false
            });
        },
        error: function(xhr, status, err) {
            setState({
                loading: false, tareasProyecto: []
            });
            notify.show(errorEnSolicitud, "error");
        },
        timeout: segundosTimeoutPeticionesAjax
    });
}

export function getTareasSemanales(recursoCod, setState) {
    setState({
        loading: true
    });
    $.ajax({
        type: "GET",
        url: baseURLServer + uriTareasSemanales + recursoCod,
        success: function(res) {
            setState({
                tareasSemanales: res,
                loading: false
            });
        },
        error: function(xhr, status, err) {
            setState({
                loading: false,
                tareasSemanales: []
            });
        },
        timeout: segundosTimeoutPeticionesAjax
    });
}

export function login(nombre_usuario, contrasenha, cookie) {
    var usuario = validarCredenciales(nombre_usuario, contrasenha);
    if (usuario === undefined) {
        return false;
    }
    var userEnSesion = {
        username: usuario.username,
        nombre: usuario.nombre,
        rol: usuario.rol,
        recursoCod: usuario.recursoCod
    }
    cookie.save('userEnSesion', userEnSesion, { path: '/' });
    return true;
}

var usuarios = [{
        username: "aayala",
        password: "aayala",
        nombre: "Arnaldo Ayala",
        rol: 1,
        recursoCod: 1
    },
    {
        username: "cbustamante",
        password: "cbustamante",
        nombre: "Carlos Bustamante",
        rol: 1,
        recursoCod: 5
    },
    {
        username: "erodriguez",
        password: "erodriguez",
        nombre: "Enrique Rodriguez",
        rol: 1,
        recursoCod: 241
    },
    {
        username: "lbritez",
        password: "lbritez",
        rol: 1,
        recursoCod: 761
    },
    {
        username: "jsaracho",
        password: "jsaracho",
        nombre: "Johana Saracho",
        rol: 1,
        recursoCod: 481
    },
    {
        username: "lcavila",
        password: "lcavila",
        nombre: "Lisbet Cavila",
        rol: 2,
        recursoCod: 19
    },
    {
        username: "econtreras",
        password: "econtreras",
        nombre: "Elvio Contreras",
        rol: 1,
        recursoCod: 341
    },
    {
        username: "eencina",
        password: "eencina",
        nombre: "Eduardo Encina",
        rol: 1,
        recursoCod: 81
    },
    {
        username: "mmendoza",
        password: "mmendoza",
        nombre: "Miguel Mendoza",
        rol: 1,
        recursoCod: 682
    },
    {
        username: "imedina",
        password: "imedina",
        nombre: "Ivan Medina",
        rol: 1,
        recursoCod: 641
    },
    {
        username: "msantacruz",
        password: "msantacruz",
        nombre: "Mabel Santacruz",
        rol: 1,
        recursoCod: 741
    },
    {
        username: "cleiva",
        password: "cleiva",
        nombre: "Carlos Leiva",
        rol: 1,
        recursoCod: 201
    },
    {
        username: "dalcaraz",
        password: "dalcaraz",
        nombre: "Dario Alcaraz",
        rol: 1,
        recursoCod: 762
    },
    {
        username: "ggauto",
        password: "ggauto",
        nombre: "Gisselle Gauto",
        rol: 1,
        recursoCod: 141
    }
];

function validarCredenciales(nombre_usuario, contrasenha) {
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].username.toLowerCase() === nombre_usuario.toLowerCase() && usuarios[i].password === contrasenha) {
            return usuarios[i];
        }
    }
    return undefined;
}