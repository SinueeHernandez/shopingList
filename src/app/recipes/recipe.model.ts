export interface IRecipe {
    name: string;
    description: string;
    imagePath: string;
}

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(obj?: IRecipe) {
        this.name = obj && obj.name || '';
        this.description = obj && obj.description || '';
        this.imagePath = obj && obj.imagePath || '';
    }
}
