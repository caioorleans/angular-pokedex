import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPokemonComponent } from './pages/all-pokemon/all-pokemon.component';

const routes: Routes = [{
  path: '', component: AllPokemonComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
