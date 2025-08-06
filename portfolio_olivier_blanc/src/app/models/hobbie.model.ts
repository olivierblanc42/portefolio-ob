export interface Hobbie {
    id: number;
    name: string;
    description: string;
    url: string;
}

export interface HobbieList {
    hobbies: Hobbie[];
}