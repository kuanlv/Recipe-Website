import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { RecipeComponent } from './recipe/recipe.component';


@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      RecipeFormComponent,
      RecipesComponent,
      RecipeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      NoopAnimationsModule,
      MatToolbarModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatListModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
