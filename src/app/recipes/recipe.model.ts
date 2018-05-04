import { Ingredient } from '../shared/ingredient.model';

export interface IRecipe {
    name: string;
    description: string;
    imagePath: string;
    ingridients: Array<Ingredient>;
}

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Array<Ingredient>;

    constructor(obj?: IRecipe) {
        this.name = obj && obj.name || '';
        this.description = obj && obj.description || '';
        this.imagePath = obj && obj.imagePath || '';
        this.ingredients = obj && obj.ingridients || new Array<Ingredient>();
    }
}
