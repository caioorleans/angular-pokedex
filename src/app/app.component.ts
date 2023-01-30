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
  pokedex:Pokemon[] = [];
  filteredPokemon:Pokemon[] = [];
  filterBy:string="";

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
        this.filteredPokemon = this.pokedex;
      },
      error: err => console.log(err)
    })
  }

  set filter(value:string){
    this.filterBy = value;
    console.log(this.filterBy);

    this.filteredPokemon = this.pokedex.filter((pokemon:Pokemon) => pokemon.name.indexOf(this.filterBy.toLowerCase())>-1);
    console.log(this.filteredPokemon);
  }
  get filter(){
    return this.filterBy;
  }
}
