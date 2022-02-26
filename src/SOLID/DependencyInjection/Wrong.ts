export class DramaCategory {
    getName(): string {
        return 'Drama';
    }
}

export class MovieDIWrong {
    name: string;
    constructor() {

    }
    
    getName(): string {
        return this.name;
    }

    setName(name: string): string {
        this.name = name;

        return this.name;
    }

    showCategory() {
        const category = new DramaCategory();
        return category.getName();
    }
}