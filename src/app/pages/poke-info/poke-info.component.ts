import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/models/pokemon';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css', './type.style.component.css']
})
export class PokeInfoComponent implements OnInit{

  pokemon:Pokemon = {
    pokedexNumber: 0,
    name:"",
    image: "",
    types:[""],
    stats: []
  };

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    let pokemonName:string | null = this.route.snapshot.paramMap.get("id");
    let auxPokedex = localStorage.getItem("allPokemon");
    if(pokemonName && auxPokedex){
      let pokedex:Pokemon[] = JSON.parse(auxPokedex);
      let pokemon = pokedex.find(pokemon => pokemon.name === pokemonName);
      if(pokemon){
        this.pokemon = pokemon;
      }
    }
  }

}
