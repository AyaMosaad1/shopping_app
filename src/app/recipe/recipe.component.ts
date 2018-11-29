import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeServices } from './recipe.services';
//import { recipt } from './recipe.model';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers : [RecipeServices]
})
export class RecipeComponent implements OnInit {
  selectedrecipe: Recipe;
  //reciptsarr: recipt[] = [new recipt('A name','decription','path')];
  constructor(private recipeService: RecipeServices ) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedrecipe = recipe;
      }
    );
  }

}
