export class Recipes {
   id: number;
   name: string;
   steps: Array<any>;

   constructor(id: number, name: string, steps: Array<any>) {
      this.id = id;
      this.name = name;
      this.steps = steps;
   }
}
