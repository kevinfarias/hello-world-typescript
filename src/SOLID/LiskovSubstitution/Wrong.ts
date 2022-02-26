export class Movie {
    play() {
        // toca o vídeo
    }

    increaseVolume() {

    }
}

export class TheLionKing extends Movie {

}

export class ModernTimes extends Movie {
    public increaseVolume() {
        // putz
    }
}

export const filmi: Movie = new TheLionKing();