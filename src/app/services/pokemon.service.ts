import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonResponse } from 'src/models/pokemonResponse';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl:string;

  constructor(private http:HttpClient) {
    this.baseUrl = environment.pokeApiUrl
  }

  getPokemon(name:string):Observable<PokemonResponse>{
    return this.http.get<PokemonResponse>(`${this.baseUrl}pokemon/${name}`);
  }
}
