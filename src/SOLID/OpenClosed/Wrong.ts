
export class Video {
    type: string;

    public calculaInteresse(): number {
        if (this.type === 'Movie') {
            // calcula interesse baseado em filme
            return 1;
        } else if (this.type === 'TVShow') {
            // calcula interesse baseado em tv show
            return 2;
        }
    }
}