import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {AppComponent} from '../app.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {AppRoutingModule} from '../app-routing.module';
import {MatCardModule, MatList, MatListItem, MatListModule} from '@angular/material';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatListModule,
    MatCardModule,
    InfiniteScrollModule
  ],
  exports: [PokemonListComponent, PokemonDetailComponent],
  bootstrap: [AppComponent]
})
export class PokemonsModule { }
