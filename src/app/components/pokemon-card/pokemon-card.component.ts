import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/models/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css','./type-style.component.css']
})
export class PokemonCardComponent implements OnInit{

  @Input() pokemon!:Pokemon;

  constructor(private pokemonService:PokemonService){}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    this.pokemonService.getPokemon(this.pokemon.name).subscribe({
      next: (res) => {
        this.pokemon.image = res.sprites.other.home.front_default;
        res.types.forEach(type => {
          this.pokemon.types.push(type.type.name);
        });
        console.log(this.pokemon)
      },
      error: err => console.log(err)
    })
  }
}
