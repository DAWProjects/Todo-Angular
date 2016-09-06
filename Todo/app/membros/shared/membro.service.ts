import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Membro } from './membro.model';


@Injectable()
export class MembroService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private membrosUrl = 'http://localhost/Todo-angular/API/public/membros';

    getMembros(): Promise<Membro[]> {
        return this.http.get(this.membrosUrl)
            .toPromise()
            .then(response => response.json() as Membro[])
            .catch(this.handleError);
    };

    constructor(private http: Http) { }


    getMembroSlowly(): Promise<Membro[]> {
        return new Promise<Membro[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getMembros());
    };

    getMembro(id: number): Promise<Membro> {
        return this.getMembros()
            .then(membros => membros.find(membro => membro.id === id));
    };

    private handleError(error: any): Promise<any> {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
