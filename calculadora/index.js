let clicado = '';
let res;
let resStatus = false;

/* referenciando teclas no DOM */
const buttons = document.querySelectorAll('li');
const tela = document.getElementById('cal-tela');

/* Adicionando evento de clique aos botões */
buttons.forEach(element => element.addEventListener('click',(e) =>{
    
    /* valor recebido no click */
    let valor = e.target.id;
    
    /* apagando valores */
    if( valor === 'arrow' ){
        if( resStatus === true ){
            tela.innerHTML = '';
        }else{ 
            clicado = clicado.slice(0,-1);
            tela.innerHTML = clicado;
            resStatus = false;
        }

    }
    /* resposta */
    else if(valor === '='){

        if(resStatus === true){
            resStatus = false;
            tela.innerHTML = ''
            clicado = ''
        }
        else{
            resStatus = true;

            /* operações invalidas */
            try{

                res = eval(clicado);
                tela.innerHTML += ` = ${res}`;
            }
            catch(err){
                
                tela.innerHTML = 'Operação invalida!';
            }

        }
        
    }
    /* adicionando valores */
    else{
        if(resStatus === true){
            clicado = '';
            resStatus = false;
        }
        clicado += `${valor}`;
        tela.innerHTML = clicado;
    }

}));
