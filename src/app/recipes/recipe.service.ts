import { EventEmitter , Injectable} from '@angular/core';
import { Recipe } from './recipe.modal';
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from '../shoppinglist/shoppinglist.service';
@Injectable()
export class RecipeService {
//recipeSelected = new EventEmitter<Recipe>();
private recipes: Recipe[] = [
    new Recipe('Dosa','First Recipe','https://www.pinterest.com/pin/132434045270624736',[
        new Ingredient('flour', 1),
        new Ingredient('Dip', 2)

    ]),
    new Recipe('Biryani','Second Recipe','https://www.pinterest.com/pin/132434045270624736',[
        new Ingredient('Rice', 1),
        new Ingredient('Chicken', 2)
    ]),
    new Recipe('Eggs','third Recipe','https://www.pinterest.com/pin/132434045270624736',[
        new Ingredient('Egg', 1),
        new Ingredient('Oil', 2)
    ])
  ];
    constructor(private shoppingListService: ShoppingListService){}

getRecipes(){
    return this.recipes.slice();
}
getRecipe(index : number) {
    return this.recipes[index];
}
  addIngredientsToshoppingList(ingredients : Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
  }
}