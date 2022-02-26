export class Course {
    name: string;
    category: number;

    constructor(private conexaoAoBanco: any) {
    }

    public create() {
        return this.conexaoAoBanco().insert('course', {
            nome: 'teste'
        });
    }
}