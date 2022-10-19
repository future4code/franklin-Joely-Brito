export class products {
    constructor(
         public id: number,
         public name: string,
         public tags: string,
    ) {}

    public getId = () => {
        return this.id;
    };

    public getName = () => {
        return this.name;
    };

    public getTags = () => {
        return this.tags;
    }
}