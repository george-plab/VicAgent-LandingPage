import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

import { GameDetailComponent } from './components/games/game-detail/game-detail.component';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent } from './components/games/home/home.component';
import { GameFoundComponent } from './components/games/game-found/game-found.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { FiverrComponent } from './components/fiverr/fiverr.component';
import { PrivacyComponent } from './components/privacy/privacy.component';


const APP_ROUTES: Routes = [
  { path:'home' , component :HomeComponent},
  { path:'games' , component :GamesComponent},
  { path:'game-detail/:id' , component :GameDetailComponent},
  { path:'game-found/:termino' , component :GameFoundComponent},
  { path:'marketplace' , component :MarketplaceComponent},  
  { path:'Fiverr' , component :FiverrComponent},  
  { path:'about' , component :AboutComponent},
  { path: 'privacy', component: PrivacyComponent},

  { path:'**', pathMatch:'full', redirectTo:'games'},
  //{ path:'**', pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
