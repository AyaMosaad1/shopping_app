import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './Recipe/recipe-list/recipe-list.component';
import { RecipeItemsComponent } from './Recipe/recipe-items/recipe-items.component';
import { RecipeDetailsComponent } from './Recipe/recipe-details/recipe-details.component';
import { Test7Component } from './test7/test7.component';
import { DirctiveDirective } from './dirctive.directive';
import { shoppingListService } from './shopping-list/shopping-list.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemsComponent,
    RecipeDetailsComponent,
    Test7Component,
    DirctiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [shoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
