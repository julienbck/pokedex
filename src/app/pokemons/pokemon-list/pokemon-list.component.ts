import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons = {data : [], limit: 20, offset: 0};

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons(this.pokemons.offset, this.pokemons.limit);
  }

  getPokemons(offset, limit) {
    this.pokemonService.getPokemons(offset, limit).subscribe(pokemons => {
      this.pokemons.data = this.pokemons.data.concat(pokemons.data);
      this.pokemons.offset = pokemons.offset + 20;
    });
  }

  onScroll() {
    this.getPokemons(this.pokemons.offset, this.pokemons.limit);
  }

}
