import {Projecto} from "../../projectos/shared/projecto.model";
import {Tarefa} from "../../tarefas/shared/tarefa.model";
export class Membro {
    id: number;
    nome : string;
    idade: number;
    sexo: string;
    cargo: string;
    grau_academico: string;
    endereco: string;
    telefone: string;
    email: string;
    projecto: Projecto;
    tarefas: Tarefa[];
}