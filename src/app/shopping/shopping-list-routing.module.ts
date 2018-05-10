import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping.component';

const shoppingListRoutes = [
    {path: 'shopping-list', component: ShoppingComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(shoppingListRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ShoppingListRoutingModule {}
