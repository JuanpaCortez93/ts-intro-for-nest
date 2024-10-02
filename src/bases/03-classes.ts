import axios from "axios";
import { IPokemonApiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  public readonly id: number;
  public name: string;
  public type: string;

  get imageUrl(): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
  }

  constructor(id: number, name: string, type: string) {
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

  async getMoves() {
    const { data } = await axios.get<IPokemonApiResponse>(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`
    );
    return data.moves;
  }
}
