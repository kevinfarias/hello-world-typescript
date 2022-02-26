interface Movie {
    play(): boolean;
    increaseVolume(): number;
}

export class TheLionKing implements Movie {
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

    public increaseVolume(): number {
        // fudeu
        return -1;
    }
}