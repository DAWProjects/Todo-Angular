import {Projecto} from '../../projectos/shared/projecto.model';
import {Membro} from "../../membros/shared/membro.model";

export class Tarefa {
    id:number;
    titulo: string;
    data_criacao: Date;
    data_entrega_desejada: Date;
    data_entrega_real: Date;
    estado: string;
    membro: Membro;
    projecto: Projecto;
    membro_id:number;


    constructor(id: number, titulo: string, data_criacao: Date, data_entrega_desejada: Date, data_entrega_real: Date, estado: string) {
        this.id = id;
        this.titulo = titulo;
        this.data_criacao = data_criacao;
        this.data_entrega_desejada = data_entrega_desejada;
        this.data_entrega_real = data_entrega_real;
        this.estado = estado;
    }
}