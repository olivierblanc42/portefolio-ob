export interface Realization {
    id: number;
    name: string;
    description: string;
    url: string;
}

export interface RealizationList {
    realizations: Realization[];
}
