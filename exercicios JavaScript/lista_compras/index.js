const ul = document.querySelector('ul');
const enviar = document.querySelector('.btn-enviar');
// adição de eventos

enviar.addEventListener('click',function(e){
  let valor_input = e.target.previousElementSibling.value;
  ul.innerHTML+= `<li>${valor_input} <button class="del">DEL </button> </li>`
  

});

ul.addEventListener('click',function(e){
  console.log(e.target);
  if(e.target.className === 'del'){
    e.target.parentElement.remove();
  }
});
/*  */
