// fazendo referência aos elementos do DOM.
const btn_search = document.querySelector('.btn-search');
const input = document.querySelector('input');
const recipe_container = document.querySelector('.recipe-container');

// função para buscar os dados da api

const getData = () => {
    const recipes = fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
    .then(resp =>{
        return resp.json()
    })
    .then(data =>{
        recipe_container.innerHTML = "";
        const { meals } = data;
        if(meals === null){
            recipe_container.innerHTML += "<h1>Ops.. nada foi encontrado! </h1>"
        }
        else{
            meals.forEach( meal =>{
		//adição do html	
                recipe_container.innerHTML += 
                `<div class="meal-card">
                    <a href="${meal.strYoutube}" target="_blank">
                        <img class="meal-img" src="${meal.strMealThumb}" alt="recipe video"/>
                        <h1 class="meal-name">${meal.strMeal}</h1>
                    </a>
                    <p> Origem: ${meal.strArea}</p>
                    <p> Tags: ${meal.strTags === null? 'nenhuma': meal.strTags}</p>
                    
    
                </div>`
            })
        }
    })

    // limpando input de busca.
    input.value = ""
}

// adicionando evento no butão de busca
btn_search.addEventListener('click', getData );





