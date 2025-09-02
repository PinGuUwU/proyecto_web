//Ubicacion

const btnRegistro = document.querySelector('#registrar a')
const btnRegistrarse = document.querySelector('#btn-registro')
const presentacionRegistro = document.querySelector('#presentacion-registro')
const formularioRegistro = document.querySelector('#formulario-registro')


const btnInicio = document.querySelector('#iniciar-sesion a')
const btnIniciarSesion = document.querySelector('#btn-login')
const presentacionInicio = document.querySelector('#presentacion-inicio')
const formularioInicio = document.querySelector('#formulario-inicio')


//Declaraciones

function irArriba(){
    window.scrollTo(0,0)
}

function irRegistro(){
    presentacionRegistro.style.display = 'block'
    formularioRegistro.style.display = 'block'
    presentacionInicio.style.display = 'none'
    formularioInicio.style.display = 'none'
}

function irInicioSesion(){
    presentacionRegistro.style.display = 'none'
    formularioRegistro.style.display = 'none'
    presentacionInicio.style.display = 'block'
    formularioInicio.style.display = 'block'
}

//control

//Oculto el registro cuando alguien carga la página

presentacionRegistro.style.display = 'none'
formularioRegistro.style.display = 'none'

btnRegistro.addEventListener(
    'click', () => {
        irRegistro()
        irArriba()
    }
)

btnInicio.addEventListener(
    'click', () => {
        irInicioSesion()
        irArriba()
    }
)

btnRegistrarse.addEventListener(
    'click', () => {
        confirm("Se ha registrado con éxito. \nSerá enviado a la página de LogIn.")
        irInicioSesion()
    }
)

btnIniciarSesion.addEventListener(
    'click', () => {
        //Acá lo envío al dashboard
    }
)

console.log("versión 1.0")

/*
    Funciones a hacer:
        -ABM. Alta, Baja, Modificación de usuarios
        -Comprobacion de que un usuario existe
        -Comprobación de que la contraseña es correcta
        
*/
