export interface Persona {
  // id: number;
  nombre: string;
  apellido: string;
  documento: string;
  correo: string;
  genero: number;
  edad:number;
  pasatiempo: number;
}

export const personaNUll = {
  // id: 0,
  nombre: '',
  apellido: '',
  documento: '',
  correo: '',
  genero: 0,
  edad:0,
  pasatiempo: 0,
}

export const generosPersona = [
  null,
  'masculino',
  'femenino',
];


export const pasatiemposPersona = [
  'Leer', 'Caminar', 'Dormir'
];

