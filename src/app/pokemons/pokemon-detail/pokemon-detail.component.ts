import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {ActivatedRoute} from '@angular/router';
import {Location } from '@angular/common';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService,  private  location: Location) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    const idPokemon = +this.route.snapshot.paramMap.get('idPokemon');

    this.pokemonService.getPokemon(idPokemon).subscribe(pokemon => this.pokemon = pokemon);
  }

  goBack(): void {
    this.location.back();
  }

}
