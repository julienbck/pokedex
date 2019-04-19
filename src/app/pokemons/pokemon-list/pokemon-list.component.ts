import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import { PokemonService } from '../pokemon.service';
import {Pokemon} from '../pokemon.model';
import {PagedData} from '../paged-data.model';
import {PokemonDetailComponent} from '../pokemon-detail/pokemon-detail.component';
import {FormControl} from '@angular/forms';
import {empty} from 'rxjs/internal/Observer';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: PagedData<Pokemon> = { data: [], limit: 20, offset: 0};

  searchValue: FormControl;

  @Output() idUpdated: EventEmitter<number> = new EventEmitter<number>();

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

  onClick(idPokemon) {
    this.idUpdated.emit(idPokemon);
    console.log(idPokemon);
  }

  searchPokemon(event: any) {
    if (event.target.value == "") {
      this.pokemons = { data: [], limit: 20, offset: 0};
      this.getPokemons(this.pokemons.offset, this.pokemons.limit);
    } else {
      console.log(event.target.value);
      this.pokemonService.getPokemonByNameOrId(event.target.value).subscribe(pokemons => {
        this.pokemons.data = pokemons.data;
      });
    }
  }
}
