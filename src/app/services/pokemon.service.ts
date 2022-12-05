import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/app/enviroments/environment'
import { PokemonData } from '../models/pokemonData'
 
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL: string = ''
  private pokeData: PokemonData | any

  constructor(
    private http: HttpClient
  ) {
    this.baseURL = Environment.pokeApi
   }

  
  getPkemon(pokeName: string):Observable<PokemonData>{
    console.log(this.baseURL)
    this.pokeData = this.http.get<PokemonData>(`${this.baseURL}${pokeName}`)
    console.log(this.pokeData)

    return this.pokeData
  }

}
