interface AudioMovie {
    increaseVolume(): number
}

export class Movie {
    play() {
        // toca o vídeo
    }
}

export class TheLionKing extends Movie implements AudioMovie {
    public increaseVolume() {
        return 0;
    }
}

export class ModernTimes extends Movie {
    
}

export const filmi: Movie = new TheLionKing();