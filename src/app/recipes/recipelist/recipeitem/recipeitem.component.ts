import { Component, OnInit ,Input} from '@angular/core';
import { Recipe } from '../../recipe.modal';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
 @Input() recipe: Recipe;
 @Input() index: number;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
 /* onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  } */

}
