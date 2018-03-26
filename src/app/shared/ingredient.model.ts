export class Ingredient {
    public name: string;
    public amount: number;

    constructor(obj?: Ingredient) {
        this.name = obj.name || '';
        this.amount = obj.amount || 0;
    }
}
