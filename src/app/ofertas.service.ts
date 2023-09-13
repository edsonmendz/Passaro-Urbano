import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { URL_API } from './app.api';

import { interval, take, lastValueFrom, firstValueFrom } from 'rxjs';
import { __await } from 'tslib';

@Injectable()

export class OfertasService {
   

    constructor( private http: HttpClient) {

    }
    

    public getOfertas(): Promise<Oferta[]> {
        return firstValueFrom(this.http.get(`${URL_API}ofertas?destaque=true`))
        .then((resposta: any) => resposta)
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
        return lastValueFrom(this.http.get(`${URL_API}ofertas?categoria=${categoria}`))
            .then((resposta: any) => resposta)
            
    }

    public getOfertaPorId (id:number): Promise<Oferta> {        
        return lastValueFrom(this.http.get<Oferta>(`${URL_API}ofertas/${id}`))                    
    }

    public comoUsarOfertaPorId (id:number): Promise<string> {
        return lastValueFrom(this.http.get<string>(`${URL_API}como-usar/${id}`))
    }

    public ondeFicaOfertaPorId (id:number): Promise<string> {
        return lastValueFrom(this.http.get<string>(`${URL_API}onde-fica/${id}`))
    }
}