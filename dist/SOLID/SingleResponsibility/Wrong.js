"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Curso {
    connection() {
        const minhaConexaoAoBanco = void (0);
        return minhaConexaoAoBanco;
    }
    createCategoria() {
        return this.connection().insert('categoria', {
            nome: 'teste'
        });
    }
    createCourse() {
        return this.connection().insert('course', {
            nome: 'teste'
        });
    }
}
exports.default = Curso;
