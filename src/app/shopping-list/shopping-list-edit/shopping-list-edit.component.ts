import { Component,  OnInit, ViewChild, ElementRef } from '@angular/core';
import { ingredient } from '../../shared/shopping.ingredient';
import { shoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('Inputname') inName: ElementRef;
  @ViewChild('Inputnumber') inAmount: ElementRef;
  
 

  constructor(private slService: shoppingListService) { }
  ngOnInit() {
  }
  onAddItem() {
    const ingName = this.inName.nativeElement.value;
    const ingAmount = this.inAmount.nativeElement.value;
    const newIngredient = new ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  
  }
}


