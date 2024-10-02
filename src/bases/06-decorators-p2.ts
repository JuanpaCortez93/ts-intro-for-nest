const Deprecated = (deprecationReason: string) => {
  return (
    target: any,
    memberName: string,
    propertyDescriptor: PropertyDescriptor
  ): TypedPropertyDescriptor<any> => {
    // console.log({target})
    const originalMethod = propertyDescriptor.value;
    propertyDescriptor.value = function (...args: any[]) {
      console.warn(
        `Method ${memberName} is deprecated with reason: ${deprecationReason}`
      );
      //! Llamar la función propiamente con sus argumentos
      return originalMethod.apply(this, args);
    };
    return propertyDescriptor;
  };
};

export class PokemonDecoratorPt2 {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    return `${this.name.toUpperCase()}!!!`;
  }

  @Deprecated("This method is deprecated, use speak2 instead")
  speak() {
    return `${this.name} ${this.name}`;
  }

  speak2() {
    return `${this.name} ${this.name}`;
  }
}
