import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.services';



@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css'],
  providers: [RecipeServices]
})
export class RecipeItemsComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private onSelectedrecipe: RecipeServices) { }

  ngOnInit() {
   
  }
  onSelected() {
    this.onSelectedrecipe.recipeSelected.emit(this.recipe);
  }
}
