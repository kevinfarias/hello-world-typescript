interface Video {
    calculaInteresse(): number;
}

class Movie implements Video {
    calculaInteresse(): number {
        return 1;
    }
}

class TVShow implements Video {
    calculaInteresse(): number {
        return 2;
    }
}

class ForManTVChannel implements Video {
    calculaInteresse(): number {
        return 3;
    }
}