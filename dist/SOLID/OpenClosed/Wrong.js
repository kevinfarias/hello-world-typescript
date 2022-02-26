"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
class Video {
    calculaInteresse() {
        if (this.type === 'Movie') {
            // calcula interesse baseado em filme
            return 1;
        }
        else if (this.type === 'TVShow') {
            // calcula interesse baseado em tv show
            return 2;
        }
    }
}
exports.Video = Video;
