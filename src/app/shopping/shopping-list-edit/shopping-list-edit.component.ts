import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingListService } from '../../services/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedId: number;
  editedItem: Ingredient;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe((id: number) => {
        this.editMode = true;
        this.editedId = id;
        this.editedItem = this.shoppingListService.getIngridientById(this.editedId) || new Ingredient();
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngridiendt = new Ingredient({
      name: value.name,
      amount: value.amount
    });
    if (this.editMode) {
      this.shoppingListService.updatedIngridient(this.editedId, newIngridiendt);
    } else {
      this.shoppingListService.addIngredient(newIngridiendt);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(id: number) {
    this.shoppingListService.deleteItem(this.editedId);
    this.onClear();
  }

}
