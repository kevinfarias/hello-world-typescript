"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
class Course {
    constructor(conexaoAoBanco) {
        this.conexaoAoBanco = conexaoAoBanco;
    }
    create() {
        return this.conexaoAoBanco().insert('course', {
            nome: 'teste'
        });
    }
}
exports.Course = Course;
