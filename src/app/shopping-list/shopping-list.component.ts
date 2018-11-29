import { Component, OnInit} from '@angular/core';
import { ingredient } from '../shared/shopping.ingredient';
import { shoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  shoppingarr: ingredient[];

  constructor(private slService: shoppingListService) { }
  ngOnInit() {
    /*make a copy from array so I can use it after call it in constructor*/
    this.shoppingarr = this.slService.getIngredients();
    this.slService.ingredientChange.subscribe(
      (ingredient: ingredient[]) => {
        this.shoppingarr = ingredient;
      }
    );
  }

}
