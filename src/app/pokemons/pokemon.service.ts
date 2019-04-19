import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { PagedData } from './paged-data.model';
import { Pokemon } from './pokemon.model';
import { environment} from '../../environments/environment';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(offset, limit) {
    let parameters = new HttpParams();
    parameters = parameters.append('offset', offset);
    parameters = parameters.append('limit', limit);
    return this.http.get<PagedData<Pokemon>>(`${environment.apiUrl}pokemons`, { params: parameters} );
  }

  getPokemonByNameOrId(search) {
    let parameters = new HttpParams();
    parameters = parameters.append('search', search);
    return this.http.get<PagedData<Pokemon>>(`${environment.apiUrl}pokemons`, { params: parameters} );
  }

  getPokemonById(idPokemon) {
    return this.http.get<Pokemon>(`${environment.apiUrl}pokemons/` + idPokemon);
  }
}
