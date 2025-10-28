import { Experience } from "../models/experiences.model";


export const experienceList: Experience[] = [

    {
        id: 1,
        name: "WEB DÉVELOPPEUR",
        contractType: "Stage",
        yearStart: new Date("2024-01-01T00:00:00"),
        yearEnd: new Date("2024-01-01T00:00:00"),
        month: 'JUILLET-NOVEMBRE',
        company: "OCTACOM",
        description: "Web développeur,Intégration de site web et mise à jour."

    },
    {
        id: 2,
        name: "WEB DÉVELOPPEUR",
        contractType: "Stage",
        yearStart: new Date("2022-01-01T00:00:00"),
        yearEnd: new Date("2022-01-01T00:00:00"),
        month: 'OCTOBRE-NOVEMBRE',
        company: "OCTACOM",
        description: "Web développeur,Intégration de site web et mise à jour."

    }
    , {
        id: 3,
        name: "TECHNICIEN DE LABORATOIRE",
        contractType: "CDI",
        yearStart: new Date("2013-01-01T00:00:00"),
        yearEnd: new Date("2021-01-01T00:00:00"),
        month: null,
        company: " EUROFINS BÂTIMENT SUD EST",
        description: "Suivi de protocole, manipulation de produits chimiques exigeant rigueur etconcentration pour un travail de qualité."

    }
]