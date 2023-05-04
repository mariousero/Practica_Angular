export class Card{
    private id: number;
    private imagen: string;
    private title: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getImagen(): string {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }


    constructor(id: number, imagen: string, title: string) {
        this.id = id
        this.imagen = imagen
        this.title = title
    }    



}