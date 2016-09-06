import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Tarefa } from './tarefa.model';
import {ConfigService} from "../../shared/utils/config.service";


@Injectable()
export class TarefaService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private tarefasUrl = '';


    constructor(private http: Http,private configService: ConfigService) {
        this.tarefasUrl = configService.getApiURI();
    }

    getTarefas(): Promise<Tarefa[]> {
        return this.http.get(this.tarefasUrl+'todas-tarefas')
            .toPromise()
            .then(response => response.json() as Tarefa[])
            .catch(this.handleError);
    };


    update(tarefa: Tarefa): Promise<Tarefa> {
        const url = `${this.tarefasUrl}todas-tarefas/${tarefa.id}`;

        return this.http
            .put(url, JSON.constructor(tarefa), {headers: this.headers})
            .toPromise()
            .then(() => tarefa)
            .catch(this.handleError);
    }

    create(tarefa: Tarefa): Promise<Tarefa> {
        const url = `${this.tarefasUrl+'criar-tarefa'}`;

        return this.http
            .post(url, JSON.constructor(tarefa), {headers: this.headers})
            .toPromise()
            .then(() => tarefa)
            .catch(this.handleError);
    }


    getTarefasSlowly(): Promise<Tarefa[]> {
        return new Promise<Tarefa[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getTarefas());
    };

    getTarefa(id: number): Promise<Tarefa> {
        return this.getTarefas()
            .then(tarefas => tarefas.find(tarefa => tarefa.id === id));
    };

    private handleError(error: any): Promise<any> {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
