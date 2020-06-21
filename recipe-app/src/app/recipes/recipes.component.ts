import { Component, OnInit } from '@angular/core';
import recipeData from '../data';

@Component({
   selector: 'app-recipes',
   templateUrl: './recipes.component.html',
   styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
   recipes: Array<any> = recipeData;
   constructor() { }

   ngOnInit(): void {
   }

}
