import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() {

    console.log("Test service listo");
   }


 private games:GameTest[]=[
    {
      nombre: "DemonCountdown",
      category:"Bullet, Online Coop",
      platform:"PC",
      description: "Demon Countdown is a Bullet Hell roguelike where hordes of Demons lurk in waves from hell, Kill all’em while sun is brightness… Every map is unique, and you can Play coop with your friends. Buy Skill boost Temporal! Will you be able to survive Before nightfall?",
      img: "assets/img/DC/insta.png",
      imgDetail:"assets/img/DC/banner.png",
      itchiurl:"",
      marketurl:"https://store.steampowered.com/app/2619280/DemonCountdown/",
      price: "2",
      estado: "EarlyAccess"
    },

      {
        nombre: "The world Of Black Tyger",
        category:"Arcade Shooter",
        platform:"PC",
        description: "Just insert coin (Down load ) and unleashed the unslaved Sage... Shoot and hit the goblins horde or go stealth",
        img: "assets/img/wobt_512.png",
        imgDetail:"https://img.itch.zone/aW1hZ2UvNDUwNDkyLzIyODk5OTEuanBn/original/liCyML.jpg",
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
        imgDetail:"https://img.itch.zone/aW1hZ2UvNDk4OTkzLzY1MjExMzMucG5n/original/x9KvE5.png",
        itchiurl:"https://vicagent.itch.io/clearchernobil",
        marketurl:"",
        price: "8.95",
        estado: "demo"
      },

      {
        nombre: "SimpleShooter",
        category:"One Person Shooter , Survival Shooter",
        platform:"PC",
        description: "Survive the horde wave",
        img: "assets/img/SS_512.png",
        imgDetail:"https://img.itch.zone/aW1hZ2UvNzQ0MTM2LzQ1MDM1ODIuanBn/original/OaR%2Fw4.jpg",
        itchiurl:"https://vicagent.itch.io/simpleshooter",
        marketurl:"",
        price: "2",
        estado: "demo"
      },
      {
        nombre: "Long Shot",
        category:"Online Coop, Survival Shooter Horror, Aventura, RPG",
        platform:"PC",
        img: "https://img.itch.zone/aW1hZ2UvMTE4MzAyMS82OTAxMDIxLnBuZw==/original/WHPO6N.png",
        imgDetail:"",
        description: "Kill all Creatures before the nights",
        itchiurl:"https://vicagent.itch.io/longshot",
        marketurl:"",
        price: "2",
        estado: "jam"
      },
      {
        nombre: "Mecha Destruction",
        category:"Mecha, ThirdPersonShooter, Action",
        platform:"PC",
        img: "https://img.itch.zone/aW1hZ2UvMTIyMjYwNy83MTQ3NjQ1LnBuZw==/original/6lCAQL.png",
        imgDetail:"",
        description: "Pilot the Mecha and Destroy all building",
        itchiurl:"https://vicagent.itch.io/mechadestruction",
        marketurl:"",
        price: "2",
        estado: "jam"
      },

      {
        nombre: "ToonTanks_Jackal",
        category:"Action, Tanks, Aventura",
        platform:"ANDROID",
        description: "Rescue Missing in Combat, destroy all Turrets and tanks, Upgrade your Tank",
        img: "assets/img/TTJ_512.png",
        imgDetail:"https://img.itch.zone/aW1hZ2UvNzQ5MTI0LzQ0OTU3MzQuanBn/original/O%2BTD%2Fx.jpg",
        itchiurl:"https://vicagent.itch.io/jackal",
        marketurl:"https://play.google.com/store/apps/details?id=com.Vicagent.ToonTanks",
        price: "2",
        estado: "production"
      },
      
      {

      nombre: "The Horde",
      category:"Survival Shooter Horror",
      platform:"ANDROID",
      description: "Run And Shot the zombie horde",
      img: "assets/img/horde_512.png",
      imgDetail:"https://img.itch.zone/aW1hZ2UvNDY3ODI2LzI0MTU0NDYucG5n/original/GwMxb7.png",
      itchiurl:"https://vicagent.itch.io/the-horde",
      marketurl:"https://play.google.com/store/apps/details?id=com.VicAgent.TheHorde",
      price: "0",
      estado: "demo"
    },

    {
      nombre: "Mistic EndLess runner",
      category:"Arcade",
      platform:"ANDROID",
      description: "Mistic must run nonstop, avoid and jump obstacles, and don´t forget collect PowerUps that will help her.",
      img: "assets/img/mistic_512.png",
      imgDetail:"",
      itchiurl:"https://vicagent.itch.io",
      marketurl:"https://play.google.com/store/apps/details?id=com.VicAgent.MiscticEndlessRunner",
      price: "0",
      estado: "nolink"
    },
      {
      nombre: "Mail Order Monster",
      category:"Estrategia",
      platform:"PC",
      description: "Mail order your monster and unleash in the arena with the other monsters ",
      img: "assets/img/MOM_512.png",
      imgDetail:"",
      itchiurl:"",
      marketurl:"",
      price: "2",
      estado: "nolink"
    },
    
   


  ];

  public getGames():GameTest[]{
    
    for  (let i=0;i <this.games.length; i++)
    {
       if(this.games[i].imgDetail=="")
       {
        this.games[i].imgDetail= this.games[i].img;
       }
    }
    
    return this.games;
  }


  public getGame( id:number ):GameTest{
    
    return this.games[id];
  }

  buscarGame(termino:string):GameTest[]{
    
   if(termino.length<2) return this.getGames();

    console.log(termino);
    const gamesFound:GameTest[] = [];
    termino = termino.toLowerCase();
  
    //for (let heroe of this.heroes) typical foreach
     for  (let i=0;i <this.games.length; i++)
    {
      const game = this.games[i];
      const nombre = game.nombre.toLowerCase();
  
      if(nombre.indexOf( termino) >=0){
        game.idx=i;
        gamesFound.push( game );
      }
    }
    return gamesFound;
  
  }

}


export interface GameTest{
  nombre:string;
  category?:string;
  description?:string;
  longDescription?:string;
  platform:string;
  img:string;
  imgDetail?:string;
  price?:string;
  itchiurl:string;
  marketurl?:string;
  otherurl?:string;
  estado?: string;   //Published; Dev; Demo-Twitch.TV
  idx?:number;
}
