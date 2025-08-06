export interface Skill {
    id: number;
    name: string;
    description: string;
    url: string;
}

export interface SkillList {
    skills: Skill[];
}
