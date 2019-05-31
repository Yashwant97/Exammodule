import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs';


export class ShoppingListService{
    ingredientsChanged=new Subject<Ingredient[]>();
    private ingredients:Ingredient[]=[
        new Ingredient("Tomato",5),
        new Ingredient("Apple",10)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }
    onIngredientAdded(ingredient:Ingredient)
    {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients:Ingredient[])
    {
        // for(let ingredient of ingredients){
        //     this.onIngredientAdded(ingredient)
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients);
    }
}