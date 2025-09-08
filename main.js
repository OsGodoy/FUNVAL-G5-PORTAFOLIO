// BOTONES --------------------------------------------------------------

let botones = document.querySelector("#botones")
let cerrar = document.querySelector(".cerrar")
let abrir = document.querySelector(".abrir")
let back = document.querySelector(".back")
let fondoProyect = document.querySelector("#fondoProyect")
let fondoSkills = document.querySelector("#fondoSkills")
let fondoWho = document.querySelector("#fondoWho")

// FUNCIONALIDAD DE LOS BOTONES

abrir.addEventListener("click",function(){
    if(abrir.classList.contains("absolute")){
        abrir.classList.replace("absolute","hidden")
        back.classList.replace("hidden","absolute")
        who1.classList.replace("flex","hidden")
        whoText1.classList.replace("flex","hidden")
        who2.classList.replace("hidden","flex")
        whoText2.classList.replace("hidden","flex")
        fondoProyect.classList.replace("bg-right-top","bg-left-bottom")
        fondoWho.classList.replace("bg-right-top","bg-left-bottom")
    }
})

back.addEventListener("click",function(){
    if(back.classList.contains("absolute")){
        back.classList.replace("absolute","hidden")
        abrir.classList.replace("hidden","absolute")
        windoWho.classList.replace("hidden","fixed")
        who1.classList.replace("hidden","flex")
        whoText1.classList.replace("hidden","flex")
        who2.classList.replace("flex","hidden")
        whoText2.classList.replace("flex","hidden")
        fondoWho.classList.replace("bg-left-bottom","bg-right-top")
    }
})

cerrar.addEventListener("click",function(){
    if(cerrar.classList.contains("absolute")){
        windoWho.classList.replace("fixed","hidden")
        windowSkills.classList.replace("fixed","hidden")
        windowProyect.classList.replace("fixed","hidden")
        who.classList.replace("xl:scale-110","xl:scale-100")
        skills.classList.replace("xl:scale-110","xl:scale-100")
        proyects.classList.replace("xl:scale-110","xl:scale-100")
        who2.classList.replace("flex","hidden")
        whoText2.classList.replace("flex","hidden")
        fondoProyect.classList.replace("bg-left-bottom","bg-right-top")
        botones.classList.replace("absolute","hidden")
        back.classList.replace("absolute","hidden")
        fondoWho.classList.replace("bg-left-bottom","bg-right-top")
        contact.classList.replace("xl:scale-110","xl:scale-100")
        windowContact.classList.replace("fixed","hidden")
        redes.classList.replace("xl:scale-110","xl:scale-100")
        windowRedes.classList.replace("fixed","hidden")
    }
})


// TOGGLE MOBILE --------------------------------------------------------------

let toggle = document.querySelector(".toggle")
let toggleFx = document.querySelector(".toggleFx")
let windoToggle = document.querySelector("#windoToggle")

toggle.addEventListener("click",function(){
    if(toggle.classList.contains("fixed")){
        toggle.classList.replace("fixed","hidden")
        toggleFx.classList.replace("fixed","hidden")
        windoToggle.classList.toggle("translate-x-full")
    }
})

cerrar.addEventListener("click",function(){
    if(windoToggle.classList.contains("flex")){
        windoToggle.classList.toggle("translate-x-full")
        toggle.classList.replace("hidden","fixed")
        toggleFx.classList.replace("hidden","fixed")
    }
})


// QUIEN SOY? --------------------------------------------------------------

let who = document.querySelector("#who")
let windoWho = document.querySelector("#windoWho")
let who1 = document.querySelector("#who1")
let whoText1 = document.querySelector("#whoText1")
let whoText2 = document.querySelector("#whoText2")
let who2 = document.querySelector("#who2")

who.addEventListener("click",function(){
    if(who.classList.contains("xl:scale-100")){
        windoWho.classList.replace("hidden","fixed")
        who.classList.replace("xl:scale-100","xl:scale-110")
        who1.classList.replace("hidden","flex")
        whoText1.classList.replace("hidden","flex")
        botones.classList.replace("hidden","absolute")
        abrir.classList.replace("hidden","absolute")        
    }
})


// HABILIDADES --------------------------------------------------------------

let skills = document.querySelector("#skills")
let windowSkills = document.querySelector("#windowSkills")

skills.addEventListener("click",function(){
    if(skills.classList.contains("xl:scale-100")){
        skills.classList.replace("xl:scale-100","xl:scale-110")
        windowSkills.classList.replace("hidden","fixed")
        botones.classList.replace("hidden","absolute")
        abrir.classList.replace("absolute","hidden")
    }
})


// PROYECTOS --------------------------------------------------------------

let proyects = document.querySelector("#proyects")
let windowProyect = document.querySelector("#windowProyect")

proyects.addEventListener("click",function(){
    if(proyects.classList.contains("xl:scale-100")){
        proyects.classList.replace("xl:scale-100","xl:scale-110")
        windowProyect.classList.replace("hidden","fixed")
        botones.classList.replace("hidden","absolute")
        abrir.classList.replace("absolute","hidden")
    }
})


// CONTACTAME --------------------------------------------------------------

let contact = document.querySelector("#contact")
let windowContact = document.querySelector("#windowContact")
let fondoContact = document.querySelector("#fondoContact")

contact.addEventListener("click",function(){
    if(contact.classList.contains("xl:scale-100")){
        contact.classList.replace("xl:scale-100","xl:scale-110")
        windowContact.classList.replace("hidden","fixed")
        botones.classList.replace("hidden","absolute")
        abrir.classList.replace("absolute","hidden")
    }
})


// REDES --------------------------------------------------------------

let redes = document.querySelector("#redes")
let windowRedes = document.querySelector("#windowRedes")

redes.addEventListener("click",function(){
    if(redes.classList.contains("xl:scale-100")){
        redes.classList.replace("xl:scale-100","xl:scale-110")
        windowRedes.classList.replace("hidden","fixed")
        botones.classList.replace("hidden","absolute")
        abrir.classList.replace("absolute","hidden")
    }
})