import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()

export class RecipeService{
    
    recipes:Recipe[]=[
        new Recipe("pav Bhaji", "Desc. pav bhaji","src/app/recipes/pav-bhaji-recipe.jpg",[
            new Ingredient('Pav', 2),
            new Ingredient("Bhaji",3)
        ]),
          new Recipe("Pav Bhaji-dosa", "Desc. pav bhaji","src/app/recipes/pav-bhaji-recipe.jpg",[
            new Ingredient('Pav', 2),
            new Ingredient("Bhaji",3)
        ])
        
      ];
constructor(private slService:ShoppingListService){}
      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes[index];
      }
      addIngredientstoSL(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}

