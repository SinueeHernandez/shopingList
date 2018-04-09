import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  public ingredients: Array<Ingredient>;

  constructor() {
    this.ingredients = new Array<Ingredient>();
    this.ingredients.push(new Ingredient({
      name: 'Apple',
      amount: 5
    }));
    this.ingredients.push(new Ingredient({
      name: 'Tomatoe',
      amount: 1
    }));
  }

  ngOnInit() {
  }

  onAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
