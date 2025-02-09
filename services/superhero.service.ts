import { Superhero, CreateSuperheroDto } from "../models/superhero.model";

export class SuperheroService {
  private superheroes: Superhero[] = [];

  addSuperhero(superheroData: CreateSuperheroDto): Superhero {
    const newSuperhero: Superhero = {
      id: Date.now().toString(),
      ...superheroData,
    };

    this.superheroes.push(newSuperhero);
    return newSuperhero;
  }
  getSuperheroes(): Superhero[] {
    return [...this.superheroes].sort(
      (a, b) => b.humilityScore - a.humilityScore
    );
  }
  getSuperheroesById(id: string): Superhero | undefined {
    return this.superheroes.find((hero) => hero.id === id);
  }
}

export const superheroService = new SuperheroService();
