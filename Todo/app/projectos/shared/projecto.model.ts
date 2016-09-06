import {Tarefa} from "../../tarefas/shared/tarefa.model";
import {Membro} from "../../membros/shared/membro.model";

export class Projecto{
    id: number;
    nome: string;
    data_inicio : Date;
    data_fim : Date;
    estado: string;
    membros: Membro[];


    constructor(nome: string, data_inicio: Date, data_fim: Date, estado: string) {
        this.nome = nome;
        this.data_inicio = data_inicio;
        this.data_fim = data_fim;
        this.estado = estado;
    }
}