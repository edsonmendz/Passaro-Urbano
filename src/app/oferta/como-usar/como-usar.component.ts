import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'urbano-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar : string = ''

  constructor(private route:ActivatedRoute,
    private ofertasService: OfertasService) {}

  ngOnInit() {

    this.route.parent?.params.subscribe((parametros: Params) => {
      this.ofertasService.comoUsarOfertaPorId(parametros['id'])
        .then((resposta: any) => {           
          this.comoUsar = resposta.descricao
        })
    })    
  }
}
