"use strict";
var Membro = (function () {
    function Membro(nome, idade, sexo, cargo, grau_academico, telefone, email, projecto_id) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.cargo = cargo;
        this.grau_academico = grau_academico;
        this.telefone = telefone;
        this.email = email;
        this.projecto_id = projecto_id;
    }
    return Membro;
}());
exports.Membro = Membro;
//# sourceMappingURL=membro.model.js.map