import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredients:Ingredient[];
  private slSubscription:Subscription;
  constructor(private shoppinglservice:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppinglservice.getIngredients();
    this.slSubscription=this.shoppinglservice.ingredientsChanged.subscribe(
      (ingerdients:Ingredient[])=>{
        this.ingredients=ingerdients;
      }
    );
  }
  ngOnDestroy(){
    this.slSubscription.unsubscribe();
  }

}
