import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.services';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers : [RecipeServices]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
 

  constructor(private recipeService: RecipeServices) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
 
}
