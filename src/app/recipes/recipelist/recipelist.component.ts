import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.modal';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dosa','First Recipe','https://www.pinterest.com/pin/132434045270624736'),
    new Recipe('Dosa','First Recipe','https://www.pinterest.com/pin/132434045270624736'),
    new Recipe('Dosa','First Recipe','https://www.pinterest.com/pin/132434045270624736')
  ];

  constructor() { }

  ngOnInit() {
  }

}
