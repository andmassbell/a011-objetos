const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const copiaPokemon1 = {...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}

pokemon1.ataques = []
pokemon1.ataques.push ({nome:"investida",dano: 40,tipo: "Normal",precisão: 100  })

copiaPokemon1.ataques = [...pokemon1.ataques]
pokemon1.ataques.push ({nome:"Folha Navalha", dano: 45,tipo: "Grama" })

copiaPokemon1.ataques.push ({nome:"Jato de água",dano: 40,tipo: "Água",precisão: 100 })      

console.log(pokemon1)
console.log(copiaPokemon1)