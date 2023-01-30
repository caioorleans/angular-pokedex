import { Component, OnInit } from '@angular/core';
import { PokedexResponse } from 'src/models/pokedexResponse';
import { Pokemon } from 'src/models/pokemon';
import { PokedexService } from './services/pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-pokedex';
  pokedex:Pokemon[] = []

  constructor(private pokedexService:PokedexService){}

  ngOnInit(): void {
      this.getPokedex("kanto");
  }

  getPokedex(region:string){
    this.pokedexService.getPokedex(region).subscribe({
      next: res => {
        res.pokemon_entries.forEach(pokemon => {
          let poke:Pokemon = {
            pokedexNumber: pokemon.entry_number,
            name: pokemon.pokemon_species.name,
            image: "",
            types: []
          }
          this.pokedex.push(poke);
        })
      },
      error: err => console.log(err)
    })
  }
}
