import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconTypeComponent } from './components/icon-type/icon-type.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { AllPokemonComponent } from './pages/all-pokemon/all-pokemon.component';
import { PokeInfoComponent } from './pages/poke-info/poke-info.component';
import { BaseStatsComponent } from './components/base-stats/base-stats.component';
import { StatComponent } from './components/base-stats/stat/stat.component';
import { AddZerosPipe } from './pipes/add-zeros.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IconTypeComponent,
    PokemonCardComponent,
    AllPokemonComponent,
    PokeInfoComponent,
    BaseStatsComponent,
    StatComponent,
    AddZerosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularSvgIconModule.forRoot(),
    AngularSvgIconPreloaderModule.forRoot({
      configUrl: './assets/json/type-icons.json',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
