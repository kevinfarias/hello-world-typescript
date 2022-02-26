"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filmi = exports.ModernTimes = exports.TheLionKing = exports.Movie = void 0;
class Movie {
    play() {
        // toca o vídeo
    }
}
exports.Movie = Movie;
class TheLionKing extends Movie {
    increaseVolume() {
        return 0;
    }
}
exports.TheLionKing = TheLionKing;
class ModernTimes extends Movie {
}
exports.ModernTimes = ModernTimes;
exports.filmi = new TheLionKing();
