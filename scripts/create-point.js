

function populateUFs(){

    const ufSelect = document.querySelector("select[name=uf]")
     
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  //.then((res)=>{return res,json()})
    .then( res => res.json() )
    .then(states =>{
  //.then(data =>{

        for(const state of states){
          //ufSelect.innerHTML = ufSelect.innerHTML +'<option value="1">Valor</option>' 
          //ufSelect.innerHTML += ufSelect.innerHTML +'<option value="1">Valor</option>' 
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

                     
    })
}

populateUFs()


function getCities(event) {
  //const citySelect = document.querySelector("select [name=city]")
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")
  
    //console.log(event.target.value)
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    //Limpa cidades
    citySelect.innerHTML = "<option value>selecione a cidade</option>"
    //desabilita o campo
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        
        for( const city of cities ) {
             //ufSelect.innerHTML = ufSelect.innerHTML +'<option value="1">Valor</option>' 
            //citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
            citySelect.innerHTML += `<option value="${city.name}">${city.nome}</option>`
        }

        citySelect.disabled = false
    } )
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities) 
    //.addEventListener("change", () => {
//    console.log("Mudei")
//})