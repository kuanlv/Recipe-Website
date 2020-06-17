import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
   selector: 'app-recipe-form',
   templateUrl: './recipe-form.component.html',
   styleUrls: ['./recipe-form.component.css']
})

export class RecipeFormComponent implements OnInit {

   constructor() { }

   ngOnInit(): void {

   }

   onSubmit(form: NgForm) {
      console.log(form);
   }

}
