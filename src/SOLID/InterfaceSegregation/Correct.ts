interface Movie {
    play(): boolean;
}

interface AudioControl {
    increaseVolume(): number;
}

export class TheLionKing implements Movie, AudioControl {
    public play(): boolean {
        return true;
    }

    public increaseVolume(): number {
        return 10;
    }
}

export class ModernTimes implements Movie {
    public play(): boolean {
        return true;
    }
}