import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import {Pokemon} from '../pokemon.model';
import {PagedData} from '../paged-data.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: PagedData<Pokemon> = { data: [], limit: 20, offset: 0};

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons(this.pokemons.offset, this.pokemons.limit);
  }

  getPokemons(offset, limit) {
    this.pokemonService.getPokemons(offset, limit).subscribe(pokemons => {
      this.pokemons.data = this.pokemons.data.concat(pokemons.data);
    });
  }

  onScroll() {
    this.pokemons.offset = this.pokemons.offset + 20;
    this.getPokemons(this.pokemons.offset, this.pokemons.limit);
  }

}
