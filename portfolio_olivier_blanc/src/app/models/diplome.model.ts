export interface Diplome {
    id: number;
    name: string;
    description: string;
    url: string;
}

export interface DiplomeList {
    diplomes: Diplome[];
}