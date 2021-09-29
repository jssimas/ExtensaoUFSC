const body = document.querySelector('body');
const btns = document.querySelectorAll('button');


//adição de eventos
btns[0].addEventListener('click', function(e){
  body.style = 'background-color: red;'
});
btns[1].addEventListener('click', function(e){
  body.style = 'background-color: yellow;'
});
btns[2].addEventListener('click', function(e){
  body.style = 'background-color: blue;'
});
btns[3].addEventListener('click', function(e){
  body.style = 'background-color: green;'
});

//Fazendo com loop

/* 
for(let i=0; i < btns.length; i++){
  btns[i].addEventListener('click', function(e){
    body.style = `background-color: ${e.target.id}`
  })
}
*/