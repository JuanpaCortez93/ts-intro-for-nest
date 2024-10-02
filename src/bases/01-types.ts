export let name: string = "Juanpa";

export const age = 31;

export const isActive = true;

name = "Melissa";

// name = true; // Error

export const templateString = `Esto es un string 
con multiples lineas
que puede tener "apostrofes" y 'comillas'
Además, puedes inyectar variables como ${name}
y operaciones matemáticas como 1 + 1 = ${1 + 1}`;
