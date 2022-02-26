"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movie = exports.MovieDICorrect = exports.XCategory = exports.DramaCategory = void 0;
class DramaCategory {
    getName() {
        return 'Drama';
    }
}
exports.DramaCategory = DramaCategory;
class XCategory {
    getName() {
        return 'X';
    }
}
exports.XCategory = XCategory;
class MovieDICorrect {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }
    showCategory() {
        return this.category.getName();
    }
}
exports.MovieDICorrect = MovieDICorrect;
const category = new DramaCategory();
const movie = new MovieDICorrect('Lula o filho do Brasil', category);
exports.movie = movie;
