document.getElementsByClassName("navbar")[0].innerHTML=`<img src="pokemon icon.png" class="image" alt="pokeman"><h1>WELCOME TO POKEMAN API</h1>`
let tab=document.querySelector(".mainbody")

const getdata= async ()=>{
    try{
        let data=await fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
        var object=await data.json().then((data)=>data.results)

}
     catch(error){
         console.log(error)
     }
     return object
}
async function display(){
    try{
        let data=await getdata()
        data.forEach((data)=>{
            fetch(`${data.url}`).then((dat)=>dat.json()).then((data)=>{
                tab.innerHTML=tab.innerHTML+`<div class="card" style="width: 18rem;">
                <img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">Name:${data.name}</h5>
                  <h5 class="card-title">Abilities:
                  <ul>
                  <li>${data.abilities[0].ability.name}</li>
                  <li>${data.abilities[1].ability.name}</li>
                  </ul></h5>
                  <h5 class="card-title">Moves:${data.moves[0].move.name}</h5>
                  <h5 class="card-title">Weight:${data.weight} kg</h5>
                </div>
              </div>`

            })

    
            })
        }
    catch(error){
        console.log(error)
    }
} 
display()