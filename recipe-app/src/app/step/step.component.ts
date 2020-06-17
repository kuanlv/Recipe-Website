import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-step',
   templateUrl: './step.component.html',
   styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
   step: number = 1;
   constructor() { }

   ngOnInit(): void {
      
   }
}
