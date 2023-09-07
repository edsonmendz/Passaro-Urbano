import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'urbano-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta!:Oferta

  constructor(
    private route: ActivatedRoute, 
    private ofertaService: OfertasService) {
    
  }

  ngOnInit() {    
    this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'])
    .then((oferta: Oferta) => {
        this.oferta = oferta
    })    
  }
}
