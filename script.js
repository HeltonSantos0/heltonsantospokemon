/*  var btnstart = document.querySelector("#btnstart")
     var span = document.querySelector(".pontuação")
     var interval=
     */
var interval 
var span = document.querySelector("span")
var char = window.document.querySelector('.char')
var pipe = window.document.querySelector('.pipe1')

function clicar(){
     var char = window.document.querySelector('.char')
     var pipe = window.document.querySelector('.pipe1')
         
         
     char.style.animation = ""; setTimeout(() => char.style.animation = "fly .8s", 100);}   
     const  loop = setInterval(()=>{
     
     pipe = window.document.querySelector('.pipe1')
     char = window.document.querySelector('.char')
   
     const pipePosition = pipe.offsetLeft;
     const charPosition = +window.getComputedStyle(char).bottom.replace('px', '')
      if ( !charPosition < 30 &&  !pipePosition >= 470 ) {
     pipe.style.animation = 'pipe1-animation 1.7s infinite linear; '
     pipe.style.left =`${pipePosition}px`
     }else if (charPosition < 20 &&  pipePosition >= 460) 
      {    var rai = window.document.querySelector('#rai')
      var GameOver = window.document.querySelector('#GameOver')
      pipe.style.animation = 'none'
      rai.style.animation = 'rai-kua 4s linear'
      rai.style.display = 'block'
      GameOver.style.animation = 'Game-Over 4s linear'
      GameOver.style.display = 'block'  
      clearInterval(interval)
      
 }
} ,10)


function voltar(){
     const blas = window.document.querySelector('.pipe1')
     const rais = window.document.querySelector("#rai")
     const GO = window.document.querySelector('#GameOver')
     blas.style.animation = 'pipe-animation 1.7s infinite linear'
     rais.style.animation = 'none'
     rais.style.display = 'none'
     GO.style.animation = 'none'
     GO.style.display = 'none'
     
     var btnstart = document.querySelector("#btnstart")     
     
     btnstart = true     
     var value = parseFloat(span.innerText)
     
     interval = setInterval(() => {
          value += 0.1
          
          span.innerText = value.toFixed(1)
     }, 100)
}     

function zerar() {
     clearInterval(interval)
     span.innerText = "0.0"
} 
function trocar1(){
     var bonecos = document.querySelector(".bonecos")
     bonecos.style.display = "none"
     char.src = "eevee.gif"
     char.style.position = "absolute"
     char.style.bottom = "-8%"
     char.style.width = "25%"
     char.style.right = "4%"
}
function trocar2(){
     var bonecos = document.querySelector(".bonecos")
     bonecos.style.display = "none"
     char.src = "pikachu.gif"
     char.style.position = "absolute"
     char.style.bottom = "-5%"
     char.style.width = "25%"
     char.style.right = "4%"
}
function trocar3(){
     var bonecos = document.querySelector(".bonecos")
     bonecos.style.display = "none"
     char.src = "char.gif"
     char.style.position = "absolute"
     char.style.bottom = "0px"
     char.style.right = "0"
     char.style.width = "30%"
}
function trocar4(){
     var bonecos = document.querySelector(".bonecos")
     bonecos.style.display = "none"
     char.src = "raro.gif"
     char.style.position = "absolute"
     char.style.bottom = "0px"
     char.style.right = "0"
     char.style.width = "30%"
    
}
function trocar5(){
     var bonecos = document.querySelector(".bonecos")
     bonecos.style.display = "none"
     char.src = "mew2.gif"
     char.style.position = "absolute"
     char.style.bottom = "0px"
     char.style.right = "6%"
     char.style.width = "20%"
    
}
function Skin(){
     var bonecos = document.querySelector(".bonecos")
     bonecos.style.display = "block"
}
function OBS(){
     var bonecos2 =document.querySelector(".bonecos2")
     bonecos2.style.display = "block"
}
function trocab1(){
     var bonecos2 =document.querySelector(".bonecos2")
     pipe.src = "char3.gif"
     pipe.style.position = "absolute"
     pipe.style.bottom = "-2%"
     bonecos2.style.display ="none"
     pipe.style.width = "25%"
}
function trocab2(){
     var bonecos2 =document.querySelector(".bonecos2")
     pipe.src = "raro2.gif"
     pipe.style.position = "absolute"
     pipe.style.bottom = "0%"
     bonecos2.style.display ="none"
     pipe.style.width = "20%"
}
function trocab3(){
     var bonecos2 =document.querySelector(".bonecos2")
     pipe.src = "blas.gif"
     pipe.style.position = "absolute"
     pipe.style.bottom = "-10%"
     bonecos2.style.display ="none"
     pipe.style.width = "25%"

/*  
function clica(){
     var btnstart = document.querySelector("#btnstart")
     var span = document.querySelector("span")
     var interval=
     btnstart.disabled = true
     var value = parseFloat(span.innerText)
     
     interval= setInterval(() => {
          value += 0.1
          
          span.innerText = value.toFixed(1)
     }, 100)
}
 
 
pipe1{
     position: absolute;
     bottom: -10%;    
     width: 25%;  
     right: 120px;     
     animation
 */
