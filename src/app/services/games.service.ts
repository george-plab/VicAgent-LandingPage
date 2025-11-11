import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
//import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})

export class GamesService {

  public inProduction:boolean=true; 

  
  url="https://angular-html-4b67b.firebaseio.com/games";//.json";
  json=".json"; //needed to call Firebase API

  bIsPrivacyAcepted:boolean=false;

  constructor(
            private _http: HttpClient) {
        console.log("servicio games listo para usarse!!!"); 
      }
 /**Dock Data Its best practices work in backend data to shared in other project*/
 
 private games:Game[]=[
  {
   
    nombre: "The Horde",
    category:"Survival Shooter Horror",
    platform:"ANDROID",
    description: "Run And Shot the zombie horde",
    img: "assets/img/horde_512.png",
    itchiurl:"https://vicagent.itch.io/the-horde",
    marketurl:"https://play.google.com/store/apps/details?id=com.VicAgent.TheHorde",
    price: "0",
    estado: "shipped"
    
    
  },
  {
    nombre: "Mistic EndLess runner",
    category:"Arcade",
    platform:"ANDROID",
    description: "Mistic must run nonstop, avoid and jump obstacles, and don´t forget collect PowerUps that will help her.",
    img: "assets/img/mistic_512.png",
    itchiurl:"https://vicagent.itch.io",
    marketurl:"https://play.google.com/store/apps/details?id=com.VicAgent.MiscticEndlessRunner",
    price: "0",
    estado: "shipped"
    
  },
  {
    nombre: "The world Of Black Tyger",
    category:"Arcade Shooter",
    platform:"PC",
    description: "Just insert coin (Down load ) and unleashed the unslaved Sage... Shoot and hit the goblins horde or go stealth",
    img: "assets/img/wobt_512.png",
    itchiurl:"https://vicagent.itch.io/the-world-of-black-tyger",
    marketurl:"",
    price: "2",
    estado: "demo"
   
  },
  {
    nombre: "ClearChernobil",     
    category:"Survival Shooter Horror, Aventura, RPG",
    platform:"PC",
    description: "Collect Fauna, kill the Mutants creature while trying Fix the Reactor",
    img: "assets/img/cc_512.png",
    itchiurl:"https://vicagent.itch.io/clearchernobil",
    marketurl:"",
    price: "8.95",
    estado: "demo"
   
   
  },
  
  {
    nombre: "SimpleShooter",     
    category:"Shooter one person, Survival Shooter",
    platform:"PC",
    description: "Survive the horde wave",
    img: "assets/img/SS_512.png",
    itchiurl:"https://vicagent.itch.io/simpleshooter",
    marketurl:"",
    price: "2",
    estado: "demo"
   
  },

  {
    nombre: "ToonTanks_Jackal",     
    category:"Action, Tanks, Aventura",
    platform:"PC, Mobile",
    description: "Rescue Missing in Combat, destroy all Turrets and tanks, Upgrade your Tank",
    img: "assets/img/TTJ_512.png",
    itchiurl:"https://vicagent.itch.io/jackal",
    marketurl:"",
    price: "2",
    estado: "shipped"
   
   
  },

  { 
  nombre: "Mail Order Monster",     
  category:"Estrategia",
  platform:"PC, Mobile",
  description: "Mail order your monster and unleash in the arena with the other monsters ",
  img: "assets/img/MOM_512.png",
  itchiurl:"https://vicagent.itch.io/jackal",
  marketurl:"",
  price: "2",
  estado: "BrainStorm"
},


 



];

  servergames:Game[]=[];
  servergamesFiltrado:Game[]=[];

//Locals services calls

//Lama a esta función antes de nada para colocar el Id según array
  public SetAllId(){
    let i:number=0;
    for (let game of this.games){

      game.idx=i;
      i++;
    }
  }

  public getGames():Game[]{
    return this.games;
  }

  public getGame(idx:string ){
    let id = parseInt(idx);
    if (id<0) id=0;
    return this.games[id];

  }

  public geGameByString(GameName:string):number{
    GameName=GameName.toLowerCase();
   let i:number=0;
   for (let game of this.games){

     let nombre = game.nombre.toLowerCase();
        if (nombre==GameName){
           return i;
        }
    i++;
   }
   return -1;
}

  //Backend service calls
  //habría que hacer el mínimo de llamadas al servidor
    //solo llamar cuando esté vació o despues de hacer updates
  getBackendGames():Observable<Game[]>{
    //const url="https://angular-html-4b67b.firebaseio.com/games.json";
    //const url ="https://restcountries.com/v2/lang/es";

    const urldata=`${this.url}${this.json}`;

   return this._http.get<Game[]>(urldata)//(this.url)
    .pipe(
        map( (data:Game[]) => {
              // console.log("Request data to server");// console.log(data);
              this.servergames=data;
              return data; }
            )
       );

  }
  public getBackendGame(idx:string):Observable<Game>{
    const urldata=`${this.url}/${idx}${this.json}`;

    return this._http.get<Game>(urldata).pipe(
      map( (data:Game)=>{ 
                console.log(data);
                return data;
                     } )
    )


  }


 //Para el search Dock data
 buscarGame(termino:string):Game[]{
    
  

  console.log(termino);
  let gamesArr:Game[] = [];
  termino = termino.toLowerCase();

  //for (let heroe of this.heroes) typical foreach
   for  (let i=0;i <this.games.length; i++)
  {
    let game = this.games[i];
    let nombre = game.nombre.toLowerCase();

    if(nombre.indexOf( termino) >=0){
      game.idx=i;
      gamesArr.push( game );
    }
  }
  return gamesArr;

}


httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 




}



export interface Game{
  nombre:string;
  category?:string;
  description?:string;
  platform:string;
  img:string;
  price?:string;
  itchiurl:string;
  marketurl?:string;
  otherurl?:string;
  estado?: string;   //Published; Dev; Demo-Twitch.TV
  idx?:number;
}