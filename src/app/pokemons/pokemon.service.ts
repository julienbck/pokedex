import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { PagedData } from './paged-data.model';
import { PokemonModel } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUri =  'http://51.75.122.159:3000/';

  constructor(private http: HttpClient) { }

  getPokemons(offset, limit) {
    let parameters = new HttpParams();
    parameters = parameters.append('offset', offset);
    parameters = parameters.append('limit', limit);
    return this.http.get(this.baseUri + 'pokemons', { params: parameters} );
  }

  getPokemon(idPokemon) {
    return this.http.get<PagedData<PokemonModel>>(this.baseUri + 'pokemons/' + idPokemon);
  }
}
