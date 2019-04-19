import {Component, OnChanges, Input, SimpleChange} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {

  @Input() idPokemon: number;
  pokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnChanges() {
    if (this.idPokemon) {
      this.getPokemon(this.idPokemon);
    }
  }

  getPokemon(idPokemon = 1) {
    this.pokemonService.getPokemonById(idPokemon).subscribe(pokemon => this.pokemon = pokemon);
  }
}
