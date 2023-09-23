import { Pedido } from "./shared/pedido.model"
import { HttpClient, HttpRequest, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Injectable, Input } from '@angular/core'
import { Observable } from 'rxjs'
import { URL_API } from "./app.api"
import { map } from 'rxjs/operators'


@Injectable()

export class OrdemCompraService {    

    constructor (private http:HttpClient) {
        
    }

    public efetivarCompra(pedido: Pedido): Observable<number> {

        let headers: HttpHeaders = new HttpHeaders()

        headers.append('Content-type', 'application/json')

        return this.http.post(
            `${URL_API}pedidos`,
            pedido
            ).pipe(map((resposta: any) => resposta.id))
    }
}