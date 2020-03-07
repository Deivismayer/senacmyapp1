import { Component } from '@angular/core';
import { Artigo } from '../models/artigo';
import { ArtigoService } from '../artigo/artigo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  artigos: Artigo []= [];

  constructor(private serviceArtigo : ArtigoService) {
    
    
    
    
  this.artigos = this.serviceArtigo.getAll();

}

}
// 