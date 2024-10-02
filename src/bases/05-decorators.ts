const MyDecorator = () => {
  return (target: any) => {
    console.log(target);
  };
};

@MyDecorator()
export class NewPokemon {
  scream() {
    return `mel`;
  }

  speak() {
    return `no mi ciela`;
  }
}

@MyDecorator()
export class PokemonDecorator {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    return `${this.name.toUpperCase()}!!!`;
  }

  speak() {
    return `${this.name} ${this.name}`;
  }
}
