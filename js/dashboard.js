//Ubicaciones

//Buttons
const btn_add_task = document.querySelector(".btn")

const btn_theme = document.querySelector(".theme-toggle")
const btns_side = document.querySelectorAll(".btn-side")

const btn_invite = btns_side[0]
const btn_add_label = btns_side[1]
const btn_sent_feedback = btns_side[2]

//inputs
const input_email = document.querySelector("#inviteEmail")
const input_feedback = document.querySelector("#feedbackText")

//Declaraciones


console.log(btn_invite)
console.log(btn_add_label)
console.log(btn_sent_feedback)

//Control

btn_invite.addEventListener(
    'click', () =>{
        const email = input_email.value.trim()
        if(email === "" || !email.includes("@")){
            alert("Ingrese un email válido")
        } else {
            alert("Se ha enviado la invitación.")
        }
    }
)

btn_sent_feedback.addEventListener(
    'click', ()=> {
        const comment = input_feedback.value.trim()
        if(comment == ""){
            alert("No se puede enviar feedback vacío")
        } else {
            alert("El feedback ha sido enviado.\nMuchas gracias por ayudarnos a crecer.")
        }
    }
)