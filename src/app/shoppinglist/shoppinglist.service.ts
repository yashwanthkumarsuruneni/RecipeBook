//import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
import  { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();

   private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5 ),
    new Ingredient('Tomatoes',10)
  ];
    
    getIngredients() {
        return this.ingredients;
    }
  
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[] ){
     // for (let ingredient of ingredients){
      //    this.addIngredient(ingredient);
      //}
      this.ingredients.push(...ingredients);
      this.ingredientChanged.next(this.ingredients.slice());
  }

}