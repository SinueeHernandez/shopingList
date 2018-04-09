export class Ingredient {
    public name: string;
    public amount: number;

    constructor(obj?: Ingredient) {
        this.name = obj && obj.name || '';
        this.amount = obj && obj.amount || 0;
    }
}
