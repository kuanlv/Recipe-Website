import { Component, OnInit, Renderer2, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { Recipes } from '../recipes';
import recipes  from '../../../../data';
import { Router } from '@angular/router';

@Component({
   selector: 'app-recipe-form',
   templateUrl: './recipe-form.component.html',
   styleUrls: ['./recipe-form.component.css']
})

export class RecipeFormComponent implements OnInit {
   @ViewChild("stepInputs", { static: true }) stepInputs;
   @ViewChild("stepTitle", { static: true }) stepTitle;

   isAddable: boolean = true;
   isSaveable: boolean = true;
   submitForm: boolean = false;
   steps: Array<any> = new Array();
   stepForm: Array<any> = new Array();
   noOfStep: number = 0;
   step: {
      stepId: number,
      stepTitle: string,
      stepDescription: string,
      stepUrl: string,
      stepImg: string
   } = {
         stepId: 0,
         stepTitle: "",
         stepDescription: "",
         stepUrl: "",
         stepImg: ""
      };

   constructor(private renderer: Renderer2, private route: Router) {
   }

   ngOnInit(): void {
   }

   copyStep(info) {
      const stepCopy = JSON.parse(JSON.stringify(this.step));
      this.stepForm.push(stepCopy);
      if (this.noOfStep >= 1) {
         this.step.stepId = this.noOfStep;
         this.step.stepTitle = info.stepTitle;
         this.step.stepDescription = info.stepDescription;
         this.step.stepUrl = info.stepUrl;
         this.step.stepImg = info.stepImg;
         this.stepForm[this.step.stepId] = JSON.parse(JSON.stringify(this.step));
      }
      this.noOfStep += 1;
      // console.log(`stepForm array: ${this.stepForm}`);
      if (this.stepForm.length > 1)
         this.isAddable = false;
      if (this.stepForm.length > 2) {
         this.isSaveable = true;
         this.isAddable = false;
         this.submitForm = false;
      }
   }

   saveStep(info) {
      const newStep = {
         stepId: this.noOfStep - 1,
         stepTitle: info.stepTitle,
         stepDescription: info.stepDescription,
         stepUrl: info.stepUrl,
         stepImg: info.stepImg
      }
      this.steps.push(newStep);
      this.isAddable = true;
      this.isSaveable = false;
      this.submitForm = true;
      console.log(this.steps)
   }

   submit(form) {
      console.log(form);
      const newRecipe = new Recipes(recipes.length + 1, form.recipeName, this.steps);
      recipes.push(newRecipe);
      this.route.navigate(['/recipes']);
   }

   onFileSelected() {

   }
}
