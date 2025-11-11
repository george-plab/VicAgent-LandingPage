//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Services
import { HeroesService } from './services/heroes.service';
import { GamesService } from './services/games.service';
import { TestServiceService } from './test-service.service';
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/games/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { GamesComponent } from './components/games/games.component';
import { GameDetailComponent } from './components/games/game-detail/game-detail.component';
import { GameFoundComponent } from './components/games/game-found/game-found.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { FiverrComponent } from './components/fiverr/fiverr.component';
import { PrivacyComponent } from './components/privacy/privacy.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GamesComponent,
    GameDetailComponent,
    GameFoundComponent,
    GameCardComponent,
    MarketplaceComponent,
    FiverrComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeroesService,
    GamesService,
    TestServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
