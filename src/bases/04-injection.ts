import {
  IPokemonApiResponse,
  Move,
} from "../interfaces/pokeapi-response.interface";
import { IPokemonApiResponseAdapter } from "../api/pokemonApi.adapter";

export class PokemonInfo {
  get imageUrl(): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
  }

  constructor(
    public readonly id: number,
    public readonly name: string,
    public type: string,
    private readonly _apiAdapter: IPokemonApiResponseAdapter
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
  }

  scream() {
    return `${this.name.toUpperCase()}!!!`;
  }

  speak() {
    return `My name is ${this.name}, and I'm a ${this.type} type Pokemon`;
  }

  async getMoves(): Promise<Move[]> {
    const data = await this._apiAdapter.get<IPokemonApiResponse>(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`
    );
    return data.moves;
  }
}
