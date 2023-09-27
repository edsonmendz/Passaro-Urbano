import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable, interval, Observer, Subscription } from 'rxjs'
import { CarrinhoService } from '../carrinho.service';

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
    private ofertaService: OfertasService,
    private carrinhoService: CarrinhoService) {}

  ngOnInit() {    

    this.route.params.subscribe((parametros: Params) => {

      this.ofertaService.getOfertaPorId(parametros['id'])
        .then((oferta: Oferta) => {
        this.oferta = oferta        
      })
    })
    
    // this.route.params.subscribe(
    //   (parametro: any) => {console.log(parametro)},
    //   (erro: any) => console.log(erro),
    //   () => console.log('processamento foi classificado como concluído')
    //   )    
  }
    
  ngOnDestroy() {
    
  }

  public adicionarItemCarrinho():void {
    this.carrinhoService.incluirItem(this.oferta)
    console.log(this.carrinhoService.exibirItens())
  }

}
