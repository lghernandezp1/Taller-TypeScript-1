export class Serie {
     number: number;
     title: string;
     channel: string;
     seasons: number;
     description: string;
     link: string;
     image: string;

    constructor(number: number, title: string, channel: string, seasons: number, description: string, link: string, image: string) {
        this.number = number;
        this.title = title;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}