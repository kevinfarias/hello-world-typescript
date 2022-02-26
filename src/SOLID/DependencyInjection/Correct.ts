interface Category {
    getName(): string;
}

export class DramaCategory implements Category {
    getName(): string {
        return 'Drama';
    }
}

export class XCategory implements Category {
    getName(): string {
        return 'X';
    }
}

export class MovieDICorrect {
    constructor(private name: string, private category: Category) {

    }

    showCategory() {
        return this.category.getName();
    }
}

const category: Category = new DramaCategory();
const movie: MovieDICorrect = new MovieDICorrect('Lula o filho do Brasil', category);

export { movie };