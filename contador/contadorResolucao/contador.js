const resultado = document.getElementById('resultado');
const btns = document.getElementsByClassName('btn');

function mudarCor(){
  if(resultado.textContent > 0){
    resultado.style = "color: blue;"
  }
  else if(resultado.textContent < 0){
    resultado.style = "color:red;"
  }
  else{
    resultado.style = "color: green;"
  }

}


btns[0].addEventListener('click', function(e){
  resultado.textContent = parseInt(resultado.textContent) + 1;
  mudarCor()
});
btns[1].addEventListener('click', function(e){
  resultado.textContent -= 1;
  mudarCor();
})
console.log(document.querySelector('.container #resultado'))