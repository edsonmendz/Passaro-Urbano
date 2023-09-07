import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';

import { interval, take, lastValueFrom, firstValueFrom } from 'rxjs';
import { __await } from 'tslib';

@Injectable()

export class OfertasService {

    private url_api = "http://localhost:3000/ofertas"

    constructor( private http: HttpClient) {

    }
    

    public getOfertas(): Promise<Oferta[]> {
        return firstValueFrom(this.http.get('http://localhost:3000/ofertas?destaque=true'))
        .then((resposta: any) => resposta)
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
        return lastValueFrom(this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`))
            .then((resposta: any) => resposta)
            
    }

    public getOfertaPorId (id:number): Promise<Oferta> {        
        return lastValueFrom(this.http.get(`http://localhost:3000/ofertas?id=${id}`))
        
        .then((resposta: any) => resposta)        
    }

    
}