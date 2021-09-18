let btn_delete = document.querySelectorAll('h1');
btn_delete = Array.from(btn_delete).map(elemento =>{
    if (elemento.textContent === ' hello world '){
        return elemento.textContent = 'ola mundo'
    }else{
        return elemento.textContent
    }
})

console.log(btn_delete)