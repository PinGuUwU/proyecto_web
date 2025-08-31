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

let user = {
        username: 'usuario',
        email: 'email',
        password: 'password'
    }

function irArriba(){
    window.scrollTo(0,0)
}

function registrarUsuario(usuario, email, password){
    user = {
        username: usuario,
        email: email,
        password: password
    }
    if(buscarUsuario(user.username) != null){
        alert('El Usuario o email ingresados ya están registrados.')
        irInicioSesion()
    } else {
        localStorage.setItem('user', JSON.stringify(user))
        console.log('Se guardaron los datos del usuario: ', user)
    }
}

function buscarUsuario(usuario){
    let usuarioEncontrado = JSON.parse(localStorage.getItem("user"))
        if(usuarioEncontrado != null){
        console.log('buscarUsuario() encontró un usuario')
        return usuarioEncontrado
    } else {
        console.log('No se encontró el usuario', usuarioEncontrado)
        return null
    }
}

function irInicioSesion(){
    presentacionRegistro.style.display = 'none'
    formularioRegistro.style.display = 'none'
    presentacionInicio.style.display = 'block'
    formularioInicio.style.display = 'block'
}

localStorage.setItem('user', JSON.stringify(user))

let usuarioEncontrado = JSON.parse(localStorage.getItem("user"))

console.log(usuarioEncontrado.username)

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
        irInicioSesion()
        irArriba()
    }
)

btnRegistrarse.addEventListener(
    'click', () => {
        registrarUsuario(
            document.querySelector('#username-registro input').value,
            document.querySelector('#email-registro input').value,
            document.querySelector('#password-registro input').value
        )
    }
)

btnIniciarSesion.addEventListener(
    'click', () => {
        const password = document.querySelector('#password-inicio input')
        const name = document.querySelector('#dato-inicio input')
        user = buscarUsuario(name)
        if(user.password != password){
            alert('La contraseña o el usuario son incorrectos.')
        } else{
            console.log('se inicio sesion')
            
        }
    }
)

/*
    Funciones a hacer:
        -ABM. Alta, Baja, Modificación de usuarios
        -Comprobacion de que un usuario existe
        -Comprobación de que la contraseña es correcta
        
*/
