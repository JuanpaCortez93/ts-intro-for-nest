import { PokemonApiAdapter } from "./api/pokemonApi.adapter";
import { name, age, isActive, templateString } from "./bases/01-types";
import { pokemonIds, pokemon, pokemon2, pokemons } from "./bases/02-objects";
import { Pokemon } from "./bases/03-classes";
import { PokemonInfo } from "./bases/04-injection";
import { PokemonDecorator } from "./bases/05-decorators";
import { PokemonDecoratorPt2 } from "./bases/06-decorators-p2";

console.log(name); // Juanpa
console.log(age); // 31
console.log(isActive); // true
console.log(templateString); // Esto es un string con multiples lineas que puede tener "apostrofes" y 'comillas' Además, puedes inyectar variables como Juanpa

console.log(pokemonIds.join(", ")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]

console.log(pokemon.name); // Bulbasaur
console.log(pokemon2.name); // Ivysaur
console.log(pokemons.toString()); // [object Object],[object Object],[object Object]
console.log(pokemons); // [ { id: 1, name: 'Bulbasaur', type: 'Grass', baseExperience: 64 }, { id: 2, name: 'Ivysaur', type: 'Grass' } ]
const bulbasaur = new Pokemon(1, "Bulbasaur", "Grass");
console.log(new Pokemon(1, "Bulbasaur", "Grass")); // Pokemon { id: 1, name: 'Bulbasaur', type: 'Grass' }
console.log(bulbasaur.name); // Bulbasaur
console.log(bulbasaur.type); // Grass
console.log(bulbasaur.id); // 1
console.log(bulbasaur.imageUrl); // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
console.log(bulbasaur.scream()); // BULBASAUR!!!
console.log(bulbasaur.speak()); // My name is Bulbasaur, and I'm a Grass type Pokemon
console.log(await bulbasaur.getMoves()); // [ 'move1', 'move2', 'move3' ]

const charmander = new PokemonInfo(
  4,
  "Charmander",
  "Fire",
  new PokemonApiAdapter()
);
console.log(charmander.name); // Charmander

const squirtle = new PokemonDecorator(7, "Squirtle");
console.log(squirtle.speak()); // Squirtle

const growlithe = new PokemonDecoratorPt2(58, "Growlithe");
console.log(growlithe.scream()); // GROWLITHE!!!
