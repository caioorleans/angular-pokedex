import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPokemonComponent } from './pages/all-pokemon/all-pokemon.component';
import { PokeInfoComponent } from './pages/poke-info/poke-info.component';

const routes: Routes = [
  {path: '', component: AllPokemonComponent},
  {path: 'pokemon/:id', component: PokeInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
