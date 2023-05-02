export class Banner {
    private id: number;
    private img: string;
    private title: string;
    private subtitle: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getImg(): string {
        return this.img;
    }

    public setImg(img: string): void {
        this.img = this.img;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = this.title;
    }

    public getSubtitle(): string {
        return this.subtitle;
    }

    public setSubtitle(subtitle: string): void {
        this.subtitle = this.subtitle;
    }

    constructor(
        id: number,
        img: string,
        title: string,
        subtitle: string
    ){
        this.id = id;
        this.img = img;
        this.title = title;
        this.subtitle = subtitle;
    }
}