import { Component, Input } from '@angular/core';

@Component({
  selector: 'urbano-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css']
})
export class OrdemCompraSucessoComponent {

  @Input() public idPedidoCompra!: number

}
