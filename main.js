// QUIEN SOY? --------------------------------------------------------------

let who = document.querySelector("#who")

let windoWho = document.querySelector("#windoWho")
let who1 = document.querySelector("#who1")
let whoText1 = document.querySelector("#whoText1")
let whoText2 = document.querySelector("#whoText2")
let who2 = document.querySelector("#who2")
let cerrarWho = document.querySelector("#cerrarWho")
let abrirMore = document.querySelector("#abrirMore")
let fondoWho = document.querySelector("#fondoWho")
let backWho = document.querySelector("#backWho")

who.addEventListener("click",function(){
    if(who.classList.contains("xl:scale-100")){
        who.classList.replace("xl:scale-100","xl:scale-110")
        windoWho.classList.replace("hidden","fixed")
        who1.classList.replace("hidden","flex")
        whoText1.classList.replace("hidden","flex")
        abrirMore.classList.replace("hidden","absolute")
    }
})

abrirMore.addEventListener("click",function(){
    if(abrirMore.classList.contains("absolute")){
        abrirMore.classList.replace("absolute","hidden")
        who1.classList.replace("flex","hidden")
        whoText1.classList.replace("flex","hidden")
        who2.classList.replace("hidden","flex")
        whoText2.classList.replace("hidden","flex")
        fondoWho.classList.replace("bg-right-top","bg-left-bottom")
        backWho.classList.replace("hidden","fixed")
    }
})

backWho.addEventListener("click",function(){
    if(backWho.classList.contains("fixed")){
        backWho.classList.replace("fixed","hidden")
        windoWho.classList.replace("hidden","fixed")
        who1.classList.replace("hidden","flex")
        whoText1.classList.replace("hidden","flex")
        abrirMore.classList.replace("hidden","absolute")
        who2.classList.replace("flex","hidden")
        whoText2.classList.replace("flex","hidden")
        fondoWho.classList.replace("bg-left-bottom","bg-right-top")
    }
})

cerrarWho.addEventListener("click",function(){
    if(windoWho.classList.contains("fixed")){
        windoWho.classList.replace("fixed","hidden")
        who.classList.replace("xl:scale-110","xl:scale-100")
        who2.classList.replace("flex","hidden")
        whoText2.classList.replace("flex","hidden")
        fondoWho.classList.replace("bg-left-bottom","bg-right-top")
        backWho.classList.replace("fixed","hidden")
    }
})

// HABILIDADES --------------------------------------------------------------

let skills = document.querySelector("skills")

skills.addEventListener("click",function(){
    if(skills.classList.contains("xl:scale-100")){
        skills.classList.replace("xl:scale-100","xl:scale-110")
    }
})