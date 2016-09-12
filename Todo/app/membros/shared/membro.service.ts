import {Injectable}    from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Membro} from './membro.model';
import {ConfigService} from "../../shared/utils/config.service";


@Injectable()
export class MembroService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private membrosUrl = '';

    getMembros(): Promise<Membro[]> {
        return this.http.get(this.membrosUrl + 'todos-membros')
            .toPromise()
            .then(response => response.json() as Membro[])
            .catch(this.handleError);
    };

    constructor(private http: Http, private configService: ConfigService) {
        this.membrosUrl = configService.getApiURI();
    }

    update(membro: Membro): Promise<Membro> {
        const url = `${this.membrosUrl}todos-membros/${membro.id}`;

        return this.http
            .put(url, JSON.constructor(membro), {headers: this.headers})
            .toPromise()
            .then(() => membro)
            .catch(this.handleError);
    }

    create(membro: Membro): Promise<Membro> {
        const url = `${this.membrosUrl+'criar-membro'}`;

        return this.http
            .post(url, JSON.constructor(tarefa), {headers: this.headers})
            .toPromise()
            .then(() => tarefa)
            .catch(this.handleError);
    }

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
