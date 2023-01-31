import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/models/pokemon';
import { PokedexService } from './services/pokedex.service';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-pokedex';
}
