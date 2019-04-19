import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {AppComponent} from '../app.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {AppRoutingModule} from '../app-routing.module';
import {
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule, MatInputModule,
  MatListModule,
  MatSidenavModule
} from '@angular/material';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { PokedexComponent } from './pokedex/pokedex.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokedexComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    InfiniteScrollModule
  ],
  exports: [PokemonListComponent, PokemonDetailComponent],
  bootstrap: [AppComponent]
})
export class PokemonsModule { }
