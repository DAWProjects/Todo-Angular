"use strict";
var Tarefa = (function () {
    function Tarefa(id, titulo, data_criacao, data_entrega_desejada, data_entrega_real, estado) {
        this.id = id;
        this.titulo = titulo;
        this.data_criacao = data_criacao;
        this.data_entrega_desejada = data_entrega_desejada;
        this.data_entrega_real = data_entrega_real;
        this.estado = estado;
    }
    return Tarefa;
}());
exports.Tarefa = Tarefa;
//# sourceMappingURL=tarefa.model.js.map