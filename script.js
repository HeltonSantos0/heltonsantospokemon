function clicar(){
     var char = window.document.querySelector('.char')
     var pipe = window.document.querySelector('.pipe1')
     char.style.animation = ""; setTimeout(() => char.style.animation = "fly .8s", 100);}   
     const  loop = setInterval(()=>{
     
     pipe = window.document.querySelector('.pipe1')
     char = window.document.querySelector('.char')
   
     const pipePosition = pipe.offsetLeft;
     const charPosition = +window.getComputedStyle(char).bottom.replace('px', '')
     if (!charPosition < 50 && !pipePosition >= 450) {
     pipe.style.animation = 'pipe1-animation 1.7s infinite linear; '
     pipe.style.left =`${pipePosition}px`
     }else if (charPosition < 30 && pipePosition >= 450) 
      {    var rai = window.document.querySelector('#rai')
      var GameOver = window.document.querySelector('#GameOver')
      
      pipe.style.animation = 'none'
      rai.style.animation = 'rai-kua 4s linear'
      rai.style.display = 'block'
      GameOver.style.animation = 'Game-Over 4s linear'
      GameOver.style.display = 'block'
  
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
}