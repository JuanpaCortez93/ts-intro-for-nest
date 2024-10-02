export const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
pokemonIds.push(12);
pokemonIds.push(+"13");

export interface IPokemon {
  id: number;
  name: string;
  type: string;
  baseExperience?: number;
}

export const pokemon: IPokemon = {
  id: 1,
  name: "Bulbasaur",
  type: "Grass",
  baseExperience: 64,
};

export const pokemon2: IPokemon = {
  id: 2,
  name: "Ivysaur",
  type: "Grass",
};

export const charmander: IPokemon = {
  id: 4,
  name: "Charmander",
  type: "Fire",
};

export const pokemons: IPokemon[] = [pokemon, pokemon2];
