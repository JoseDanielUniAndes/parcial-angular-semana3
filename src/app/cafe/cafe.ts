// Variedad de café de la tienda: los datos que entrega el JSON del listado.
export class Cafe {
  id: number;
  nombre: string;
  tipo: string;
  region: string;
  sabor: string;
  altura: number;
  imagen: string;

  /**
   * @param id Identificador de la variedad.
   * @param nombre Nombre comercial (por ejemplo, "Café Especial Navegante").
   * @param tipo "Blend" o "Café de Origen".
   * @param region Municipio y departamento de origen.
   * @param sabor Notas de sabor separadas por coma.
   * @param altura Altura del cultivo en metros sobre el nivel del mar.
   * @param imagen URL de la foto del producto.
   */
  constructor(
    id: number,
    nombre: string,
    tipo: string,
    region: string,
    sabor: string,
    altura: number,
    imagen: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;
    this.sabor = sabor;
    this.altura = altura;
    this.imagen = imagen;
  }
}
