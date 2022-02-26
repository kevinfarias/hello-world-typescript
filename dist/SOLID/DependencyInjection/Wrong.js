"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieDIWrong = exports.DramaCategory = void 0;
class DramaCategory {
    getName() {
        return 'Drama';
    }
}
exports.DramaCategory = DramaCategory;
class MovieDIWrong {
    constructor() {
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
        return this.name;
    }
    showCategory() {
        const category = new DramaCategory();
        return category.getName();
    }
}
exports.MovieDIWrong = MovieDIWrong;
