import { Component, OnInit, Renderer2, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
   selector: 'app-recipe-form',
   templateUrl: './recipe-form.component.html',
   styleUrls: ['./recipe-form.component.css']
})

export class RecipeFormComponent implements OnInit {
   @ViewChild("stepInputs", { static: true }) stepInputs;
   @ViewChild("stepTitle", { static: true }) stepTitle;

   steps: Array<any> = new Array();
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

   constructor(private renderer: Renderer2) {

   }

   ngOnInit(): void {
   }

   copyStep() {
      const stepCopy = JSON.parse(JSON.stringify(this.step));
      this.steps.push(stepCopy);
      console.log();
      this.noOfStep += 1;
      this.step.stepId = this.noOfStep;
   }

   onSubmit(form: NgForm) {
      this.renderer
   }

}
