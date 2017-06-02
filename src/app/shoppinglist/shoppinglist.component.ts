import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal'

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients = [
    new Ingredient('Apples', 5 ),
    new Ingredient('Tomatoes',10)
  ];
  constructor() { }

  ngOnInit() {
  }

}
