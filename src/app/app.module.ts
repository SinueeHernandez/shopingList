// Framework Modules
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// Feature Modules
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app.routing.module';
import { RecipeModule } from './recipes/recipe.module';
// Services
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { DataStorageServices } from './shared/data-storage.services';
import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shopping-list.service';
// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    RecipeModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [
    RecipeService,
    ShoppingListService,
    DataStorageServices,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
