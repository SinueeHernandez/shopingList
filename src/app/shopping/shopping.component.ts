import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  public ingredients: Array<Ingredient>;

  constructor(
    private shoppingListService: ShoppingListService
  ) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngridients();
    this.shoppingListService.ingredientModified.subscribe((ingredients: Array<Ingredient>) => {
      this.ingredients = ingredients;
    });
  }
}
