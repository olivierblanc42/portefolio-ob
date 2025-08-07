import { Diplome } from "../models";

export const diplomeList: Diplome[] = [
    {
        id: 1,
        name:'Bac science et technique de laboratoire: 2010',
        years: new Date('2010-01-01'),
        establishment: 'Lycée Privé La Salésienne'
    },
    {
        id: 2,
        name: 'BTS Bio Analyse et Contrôle',
        years: new Date('2012-01-01'),
        establishment: 'Institut Supérieur Saint-Denis'
    },
    {
        id: 3,
        name: 'Formation de mise à niveau d\'anglais',
        years: new Date('2018-01-01'),
        establishment: 'Wall Street English'
    },
    {
        id: 4,
        name: 'Titre Professionnel Développeur web et web mobile',
        years: new Date('2022-01-01'),
        establishment: 'HumanBooster'
    },
    {
        id: 5,
        name: 'Titre Professionnel Concepteur développeur d\'applications',
        years: new Date('2024-01-01'),
        establishment: 'M2i Formation'
    }



]