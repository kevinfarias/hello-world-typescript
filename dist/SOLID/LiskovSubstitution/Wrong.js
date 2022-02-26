"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filmi = exports.ModernTimes = exports.TheLionKing = exports.Movie = void 0;
class Movie {
    play() {
        // toca o vídeo
    }
    increaseVolume() {
    }
}
exports.Movie = Movie;
class TheLionKing extends Movie {
}
exports.TheLionKing = TheLionKing;
class ModernTimes extends Movie {
    increaseVolume() {
        // putz
    }
}
exports.ModernTimes = ModernTimes;
exports.filmi = new TheLionKing();
