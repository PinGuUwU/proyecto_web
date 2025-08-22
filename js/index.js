//Ubicacion

const btnRegistro = document.querySelector('#registrar a')
const presentacionRegistro = document.querySelector('#presentacion-registro')
const formularioRegistro = document.querySelector('#formulario-registro')

const btnInicio = document.querySelector('#iniciar-sesion a')
const presentacionInicio = document.querySelector('#presentacion-inicio')
const formularioInicio = document.querySelector('#formulario-inicio')

//Declaraciones

function irArriba(){
    window.scrollTo(0,0)
}

//control

//Oculto el registro

presentacionRegistro.style.display = 'none'
formularioRegistro.style.display = 'none'

btnRegistro.addEventListener(
    'click', () => {
        presentacionInicio.style.display = 'none'
        formularioInicio.style.display = 'none'
        presentacionRegistro.style.display = 'block'
        formularioRegistro.style.display = 'block'
        irArriba()
    }
)

btnInicio.addEventListener(
    'click', () => {
        presentacionRegistro.style.display = 'none'
        formularioRegistro.style.display = 'none'
        presentacionInicio.style.display = 'block'
        formularioInicio.style.display = 'block'
        irArriba()
    }
)

/*
    Funciones a hacer:
        -ABM. Alta, Baja, Modificación de usuarios
        -Comprobacion de que un usuario existe
        -Comprobación de que la contraseña es correcta
        
*/