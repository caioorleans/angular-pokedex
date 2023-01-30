import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokedexResponse } from 'src/models/pokedexResponse';

@Injectable({
  providedIn: 'root'
})
export class PokedexService{

  private baseUrl:string;

  constructor(private http:HttpClient) {
    this.baseUrl = environment.pokeApiUrl;
  }

  getPokedex(region:string):Observable<PokedexResponse>{
    return this.http.get<PokedexResponse>(`${this.baseUrl}pokedex/${region}/`);
  }
}
