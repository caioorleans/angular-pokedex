import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/models/pokemon';

@Component({
  selector: 'app-all-pokemon',
  templateUrl: './all-pokemon.component.html',
  styleUrls: ['./all-pokemon.component.css','./all-pokemon-responsive.component.css']
})
export class AllPokemonComponent implements OnInit{
  pokedex:Pokemon[] = [];
  filteredPokemon:Pokemon[] = [];
  filterBy:string="";

  constructor(
    private pokedexService:PokedexService,
    private pokemonService:PokemonService,
    private router:Router
  ){}

  ngOnInit(): void {
    let aux = localStorage.getItem("allPokemon");
    if(aux){
      this.pokedex = JSON.parse(aux);
      this.filteredPokemon = this.pokedex;
      return;
    }
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
            types: [],
            stats: []
          }
          poke = this.getPokemon(poke);
          this.pokedex.push(poke);
        })
        this.filteredPokemon = this.pokedex;
      },
      error: err => console.log(err)
    })
  }

  getPokemon(pokemon:Pokemon):Pokemon{
    this.pokemonService.getPokemon(pokemon.name).subscribe({
      next: (res) => {
        pokemon.image = res.sprites.other.home.front_default;
        res.types.forEach(type => {
          pokemon.types.push(type.type.name);
        });
        res.stats.forEach(type => {
          let auxType = {
            name: type.stat.name,
            value: type.base_stat
          }
          pokemon.stats.push(auxType);
        });
      },
      error: err => console.log(err)
    });
    return pokemon;
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

  goToPokemonInfo(pokemonName: string){
    localStorage.setItem("allPokemon", JSON.stringify(this.pokedex));
    this.router.navigate([`pokemon/${pokemonName}`]);
  }
}
