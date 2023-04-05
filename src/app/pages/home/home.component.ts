import { Component } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personajes';
import { SimpsonsService } from 'src/app/services/simpsons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  personajes: Personaje[] | undefined;
  personajeBuscado = '';
  loader = false;

  constructor( private simpson: SimpsonsService ){ 
    this.getData();
  }

  async getData(){
    const personajes = await this.simpson.getPersonajes();
    this.personajes = personajes.docs;
    console.log(this.personajes);
  }

  filter(e: any) {
    this.personajeBuscado = e.target.value
  }
  
  async buscarPersonaje(){
    this.loader = true;
    const search = await this.simpson.searchPersonaje(this.personajeBuscado);
    this.personajes = search.result;
    console.log(this.personajes);
    setTimeout( ()=> {
      this.loader = false;
    }, 2000)
  }
}
