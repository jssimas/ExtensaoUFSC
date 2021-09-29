const buttons = document.querySelectorAll('button');
const contador = document.getElementById('resultado');

function mudarCor(){

  if(contador.textContent > 0){
    contador.style = 'color:blue;'
  }else if(contador.textContent < 0){
    contador.style = 'color: red;'
  }else{
	contador.style = "color: green;"

	}
}

buttons[0].addEventListener('click', function(e){
  contador.textContent = parseInt(contador.textContent) + 1;
  mudarCor();
});
buttons[1].addEventListener('click', function(e){
  contador.textContent -= 1;
  mudarCor();
});