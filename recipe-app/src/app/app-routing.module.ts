import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AppComponent } from './app.component'

const routes: Routes = [
   { path: '', component: RecipeFormComponent },
   { path: 'recipes', component: RecipesComponent },
   { path: 'recipe/:id', component: RecipesComponent },
];


@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
