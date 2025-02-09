export interface Superhero {
  id: string;
  name: string;
  superpower: string;
  humilityScore: number;
}

export interface CreateSuperheroDto {
  name: string;
  superpower: string;
  humilityScore: number;
}
