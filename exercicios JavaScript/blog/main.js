let postagens = [{
    autor: 'Tiago',
    titulo: 'aula javascript',
    conteudo: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
},
{
    autor: 'Tiago',
    titulo: 'aula javascript',
    conteudo: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
},
{
    autor: 'Tiago',
    titulo: 'aula javascript',
    conteudo: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
},
{
    autor: 'Tiago',
    titulo: 'aula javascript',
    conteudo: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
}]
const btn_post = document.querySelector('.add-post');
const ul = document.querySelector('ul');
const div = document.querySelector('.info');
renderizar()

btn_post.addEventListener('click', () =>{
    let nova_postagem = {}

    Array.from(div.children).forEach(elemento => {
        if(elemento.id === 'autor'){
            nova_postagem.autor = elemento.value
        }else if (elemento.id === 'titulo'){
            nova_postagem.titulo = elemento.value
        }else if( elemento.id === 'texto'){
            nova_postagem.conteudo = elemento.value
        }
    })
    postagens.push(nova_postagem)
    renderizar()
})
function renderizar(){
    ul.innerHTML = ''
    postagens.forEach(elemento => {
        ul.innerHTML += `<li> autor: ${elemento.autor} <br> titulo: ${elemento.titulo} <br> conteudo: ${elemento.conteudo} <hr/> </li>`
    })
}