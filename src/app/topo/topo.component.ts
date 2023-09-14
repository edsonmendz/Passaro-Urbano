import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { OnInit } from '@angular/core';
import { switchMap, debounceTime, of, distinctUntilChanged, catchError } from 'rxjs';

@Component({
  selector: 'urbano-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>;
  public ofertas2!: Oferta[]
  private subjectPesquisa: Subject<String> = new Subject<String>();
  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe( //retorno Oferta[]
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: String) => {
        console.log('requisição http')
        if (termo.trim() === '') {
          return of<Oferta[]>([])
        }
        return this,this.ofertasService.pesquisaOfertas(termo)
        
      }),
      catchError((err: any) => {
        console.log(err)
        return of<Oferta[]>([])
      })      
    )
   

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => {
        console.log(ofertas)
        this.ofertas2 = ofertas
      }
    )
  }

  public pesquisa(termoDaBusca: String): void {
    // this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca)
    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => console.log(ofertas),
    //   (erro: any) => console.log(erro),
    //   () => console.log('Fluxo de eventos Concluído!')
    // )

    this.subjectPesquisa.next(termoDaBusca)
  }

}
