fetch("https://pokeapi.co/api/v2/pokemon/charizard")
.then(res=> res.json())
.then(data=>{
    console.log(data)
    console.log(data.name)
    console.log(data.weight)
    console.log(data.height)
    console.log(data.sprites.back_default)
    for (let i = 0; i < data.types.length; i++) {
        const type = data.types[i]; 
        console.log(type.type.name);
    }
    for (let i = 0; i < data.abilities.length; i++) {
        const type = data.abilities[i]; 
        console.log(type.ability.name);
    }
    
})
.catch(err => console.log(err))