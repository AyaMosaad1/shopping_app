import { ingredient } from "../shared/shopping.ingredient";
import { EventEmitter } from "@angular/core";

export class shoppingListService {
  ingredientChange = new EventEmitter<ingredient[]>();

  shoppingarr: ingredient[] = [
    new ingredient('Apples', 5),
    new ingredient('Oranges', 10),
  ];
  getIngredients() {
    return this.shoppingarr.slice();
  }
  addIngredient(ingredient: ingredient) {
    this.shoppingarr.push(ingredient);
    this.ingredientChange.emit(this.shoppingarr.slice());
  }

}
