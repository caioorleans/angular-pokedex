import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css','./type-style.component.css']
})
export class PokemonCardComponent {
  types:string[] = ["grass", "psychic"];
}
