import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/models/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css','./pokemon-card-responsive.component.css','../../styles/type.style.css','../../styles/type-hover.style.css']
})
export class PokemonCardComponent implements OnInit{

  @Input() pokemon!:Pokemon;

  constructor(private pokemonService:PokemonService){}

  ngOnInit(): void {
  }
}
