export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(obj?: Recipe) {
        this.name = obj.name || '';
        this.description = obj.description || '';
        this.imagePath = obj.imagePath || '';
    }
}
