export class Articulo{
    private id: number;
    private categoria: string;
    private descripcion: string;
    private precio: number;
    private descuento: boolean;
    private favorito: boolean;
    private stock: number;
    private color: string;
    private tallas: string[];
    private img?: string;
    private precioDescuento?: number;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getCategoria(): string {
        return this.categoria;
    }

    public setCategoria(categoria: string): void {
        this.categoria = categoria;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public isDescuento(): boolean {
        return this.descuento;
    }

    public setDescuento(descuento: boolean): void {
        this.descuento = descuento;
    }

    public isFavorito(): boolean {
        return this.favorito;
    }

    public setFavorito(favorito: boolean): void {
        this.favorito = favorito;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getStock(): number {
        return this.stock;
    }

    public setStock(stock: number): void {
        this.stock = stock;
    }

    public getTallas(): string[] {
        return this.tallas;
    }

    public setTallas(tallas: string[]): void {
        this.tallas = tallas;
    }

    public getImg(): string | undefined {
        return this.img;
    }

    public setImg(img: string): void {
        this.img = img;
    }

    public getPrecioDescuento(): number | undefined{
        return this.precioDescuento;
    }

    public setPrecioDescuento(precioDescuento: number): void {
        this.precioDescuento = precioDescuento;
    }

constructor(
    id: number, 
    categoria: string, 
    descripcion: string, 
    precio: number, 
    descuento: boolean, 
    favorito: boolean, 
    stock: number, 
    color: string,
    tallas: string[], 
    img?: string, 
    precioDescuento?: number
) {
    this.id = id;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.precio = precio;
    this.descuento = descuento;
    this.favorito = favorito;
    this.stock = stock;
    this.color = color;
    this.tallas = tallas;
    this.img = img;
    this.precioDescuento = precioDescuento;
}    


}