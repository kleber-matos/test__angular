import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  pokemon: PokemonData | any


  photo: string = 'https://www.pngmart.com/files/22/Charmander-Pokemon-PNG-Transparent.png'
  attributes: string[]= ['Fire', 'Rock']

  constructor(
    private service: PokemonService
  ){}

//poke = 'https://pokeapi.co/api/v2/pokemon/bulbasaur'


  ngOnInit(): void {
    this.service.getPkemon("charizard").subscribe(
      {
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }

          console.log(res)
          console.log(res.id)
          console.log(res.name)
          console.log(res.sprites.front_default)
          console.log(res.types)

        },
        error: (err) => console.log(err)
      }
    )
  }
}
