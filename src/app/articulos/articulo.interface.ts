export interface IArticulo{
    id: number,
    categoria: string,
    descripcion: string,
    precio: number,
    descuento: boolean,
    favorito: boolean,
    stock: number,
    color: string,
    tallas: string[],
    img: string,
    precioDescuento: number
}