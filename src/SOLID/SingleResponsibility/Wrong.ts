export default class Curso {
    name: string;
    categoria: string;

    private connection() {
        const minhaConexaoAoBanco = void(0);
        return minhaConexaoAoBanco;
    }

    public createCategoria() {
        return this.connection().insert('categoria', {
            nome: 'teste'
        });
    }

    public createCourse() {
        return this.connection().insert('course', {
            nome: 'teste'
        });
    }
}