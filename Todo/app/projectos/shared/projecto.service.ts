import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Projecto } from './projecto.model';
import {ConfigService} from "../../shared/utils/config.service";


@Injectable()
export class ProjectoService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private projectosUrl = '';


    constructor(private http: Http,private configService: ConfigService) {
        this.projectosUrl = configService.getApiURI();
    }

    getProjectos(): Promise<Projecto[]> {
        return this.http.get(this.projectosUrl+'todos-projectos')
            .toPromise()
            .then(response => response.json() as Projecto[])
            .catch(this.handleError);
    };


    update(projecto: Projecto): Promise<Projecto> {
        const url = `${this.projectosUrl}todos-projectos/${projecto.id}`;

        return this.http
            .put(url, JSON.constructor(projecto), {headers: this.headers})
            .toPromise()
            .then(() => projecto)
            .catch(this.handleError);
    }

    create(projecto: Projecto): Promise<Projecto> {
        const url = `${this.projectosUrl+'criar-projecto'}`;

        return this.http
            .post(url, JSON.constructor(projecto), {headers: this.headers})
            .toPromise()
            .then(() => projecto)
            .catch(this.handleError);
    }


    getProjectosSlowly(): Promise<Projecto[]> {
        return new Promise<Projecto[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getProjectos());
    };

    getProjecto(id: number): Promise<Projecto> {
        return this.getProjectos()
            .then(projectos => projectos.find(projecto => projecto.id === id));
    };

    private handleError(error: any): Promise<any> {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
