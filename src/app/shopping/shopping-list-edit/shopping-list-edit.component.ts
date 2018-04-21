import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ShoppingListService } from '../../services/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() { }

  onAdd() {
    this.shoppingListService.addIngredient(
      new Ingredient ({
        name: this.name.nativeElement.value,
        amount: this.amount.nativeElement.value
      })
    );
  }

}
