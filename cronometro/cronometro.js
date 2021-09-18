const valor = document.querySelector('.valor');
const btns = document.querySelectorAll('button');
let ligado = false
let interval;
// adicionar eventos

//botão start
btns[0].addEventListener('click', function(e){
  if(!ligado){
    interval = setInterval(temporizador,100);
    ligado = true
  }
  else{
    alert('Cronometro já está ligado')
  }
});
// botão stop
btns[1].addEventListener('click', function(e){
  clearInterval(interval)
  ligado = false
});
// botão reset
btns[2].addEventListener('click', function(e){
  valor.textContent = 0
  if(ligado){
    clearInterval(interval)
    ligado = false
  }
});


function temporizador(){
  valor.textContent = (parseFloat(valor.textContent) + 0.1).toFixed(1)
}