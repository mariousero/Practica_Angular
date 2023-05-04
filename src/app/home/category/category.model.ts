export class Category{
    private id: number;
    private name: string;
    private count: number;
    private mainImg: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getCount(): number {
        return this.count;
    }

    public setCount(count: number): void {
        this.count = count;
    }

    public getMainImg(): string {
        return this.mainImg;
    }

    public setMainImg(mainImg: string): void {
        this.mainImg = mainImg;
    }

    constructor(
        id: number, 
        name: string, 
        count: number, 
        mainImg: string
    ) {
        this.id = id
        this.name = name
        this.count = count
        this.mainImg = mainImg
    }

}