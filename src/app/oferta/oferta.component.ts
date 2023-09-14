import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable, interval, Observer, Subscription } from 'rxjs'

@Component({
  selector: 'urbano-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {
  public oferta!:Oferta

  constructor(
    private route: ActivatedRoute, 
    private ofertaService: OfertasService) {}

  ngOnInit() {    
    
    this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'])
    .then((oferta: Oferta) => {
        this.oferta = oferta        
    })  
    
    // this.route.params.subscribe(
    //   (parametro: any) => {console.log(parametro)},
    //   (erro: any) => console.log(erro),
    //   () => console.log('processamento foi classificado como concluído')
    //   )    
  }
  
  ngOnDestroy() {
    
  }

}
