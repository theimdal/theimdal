export class Site {
    _id: string;
    name: string;
    author: string;
    url: string;
    category: string;
    placement: number;
    __v: number;
    createdAt: string;

    constructor(
        name: string,
        author: string,
        url: string,
        category: string,
        placement: number
    ) {
        this.name = name;
        this.author = author;
        this.url = url;
        this.category = category;
        this.placement = placement;
    }
}
