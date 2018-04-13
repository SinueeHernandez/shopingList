import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

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
