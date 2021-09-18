const timer = document.querySelector('.timer');
const btn = document.querySelector('.start-btn');
const ul = document.querySelector('ul');
const input = document.querySelector('input')

btn.addEventListener('click', relogio)
let min = 25;
let seg = 0;
let ligado = false
let interval = null;
let tarefa = ''


function relogio(){
    // pegar texto
    tarefa = input.value
    
    if (ligado === false && tarefa.length !== 0){

        interval = setInterval(() =>{
            if(seg === 0){
                if(min === 0){
                    fimPomodoro()
                }
                else{
                    seg = 59
                    min -=1
                }
            }else{
                seg -= 1
            }
            timer.textContent =  `${(min < 10)? `0${min}`: min}:${(seg < 10)? `0${seg}`: `${seg}` }`
            
        }, 1000)
        ligado = true
        

    }
}

function fimPomodoro(){
    ligado = false
    clearInterval(interval)
    min = 0
    seg = 3

    // adicionar a tarefa
    ul.innerHTML += `<li class="tarefa-li"> ${ tarefa } </li>`

}


// setTimeOut

const timeout = setTimeout(function(){
    console.log('executou após 2s')
},2000)

// setInterval
let count = 0;
function contador(){
    count +=1 
    console.log(count)
}
const intervalfunc = setInterval(contador,1000)
clearTimeout(timeout)
clearInterval(intervalfunc)
//
let arr = ['banana','laranja','maça']
arr = arr.filter(elemento => elemento !== 'banana')

// adiciona elemento no final
arr.push('aprendendo css')
console.log(arr)
//inclui determinado valor?
console.log(arr.includes('aprendendo css'))

// remove elemento do array
arr.pop()
console.log(arr)