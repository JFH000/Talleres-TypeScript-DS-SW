export class Serie {
    id:number;
    name: string;
    platform: string;
    number: number;
    description: string;
    url_1: string;
    url_2: string;
    
    constructor(id:number, name:string, platform:string, number:number, description:string, url_1:string, url_2: string){
        this.id = id;
        this.name = name;
        this.platform = platform;
        this.number = number;
        this.description = description;
        this.url_1 = url_1;
        this.url_2 = url_2;
    }
}
