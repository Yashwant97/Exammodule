import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients:Ingredient[];

    constructor(name: string, desc: string, image: string,ingredients:Ingredient[]){
        this.description=desc;
        this.imagePath=image;
        this.name=name;
        this.ingredients=ingredients;
    }
}